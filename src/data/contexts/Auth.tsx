import React, { useEffect, createContext, useState, useCallback } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Alert } from 'react-native';

import {
  IAuthContext,
  IUser,
} from '../protocols/Auth';

import api from '../../infra/services/api';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser[] | null>(null);
  const [stateBtn, setStateBtn] = useState<boolean>(false);

  useEffect(() => {
    AsyncStorage.getItem('@HibriPost:user')
      .then(async userStorage => {
        const userParser = userStorage != null ? JSON.parse(userStorage) : null;
        setUser(userParser);
      })
      .catch(error => {
        Alert.alert("Ocorreu um erro ao carregar seus dados", error);
      })
  }, [])

  const verifyEmail = (email: String) => {
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    
    if(!emailRegex.test(String(email))) {
      setStateBtn(false)
      Alert.alert("Email inválido", "Por favor digite um email válido.")
    }
    else if(email === ""){
      setStateBtn(false)
      Alert.alert("Vazio", "Campo de email vazio!")
    } else {
      logIn(email)
    }
  }

  const logIn = useCallback((email: String) => {
    api.get(`/users?email=${email}`)
      .then(async response => {
        if(response.headers['content-length'] === undefined) {
          setStateBtn(false);
          setUser(response.data);

          await AsyncStorage.setItem('@HibriPost:user', JSON.stringify(response.data));
        }
        else {
          setStateBtn(false);
          Alert.alert("Erro", "Email não cadastrado :(")
        }
      })
      .catch(error => {
        setStateBtn(false);
        Alert.alert("Erro", "Erro de conexão, verifique sua conexão com a internet :)" );
      })
  }, []);

  const logOut = async () => {
    await AsyncStorage.removeItem('@HibriPost:user');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, stateBtn, setStateBtn, logIn, logOut, verifyEmail }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;