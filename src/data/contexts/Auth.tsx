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
  const [user, setUser] = useState<IUser | null>(null);

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

  const logIn = useCallback((email: String) => {
    api.get(`/users?email=${email}`)
      .then(async response => {
        setUser(response.data);

        await AsyncStorage.setItem('@HibriPost:user', JSON.stringify(response.data));

      })
      .catch(error => {
        Alert.alert("Ocorreu um erro", error);
      })
  }, []);

  const logOut = async () => {
    await AsyncStorage.removeItem('@HibriPost:user');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;