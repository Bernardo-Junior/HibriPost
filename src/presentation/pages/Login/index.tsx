import React, { useState, useContext, useEffect } from 'react';

import {
  Container,
  StatusBar,
  Header,
  MessageIcon,
  TxtHeader,
  TxtHeaderBold,
  InputEmail,
  ScrollView,
  TxtWelcome,
  TxtDescrition,
  BtnLogin,
  TxtBtn,
  Body,
  Alert
} from './styles';

import Loading from '../../components/Loading';


import AuthContext from '../../../data/contexts/Auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState<String>("");
  const { logIn, logOut, user, setStateBtn, stateBtn } = useContext(AuthContext);

  const verifyEmail = () => {
    if(email === ""){
      setStateBtn(false)
      Alert.alert("Vazio", "Campo de email vazio!")
    } else {
      logIn(email)
    }
  }
  return (
    <>
      <StatusBar backgroundColor={"#FFF"} />
      <Container>
        <ScrollView keyboardShouldPersistTaps='handled' >
          <Header>
            <MessageIcon name={"message-circle"} size={35} />
            <TxtHeader>
              Hibri
                <TxtHeaderBold>
                POST
                </TxtHeaderBold>
            </TxtHeader>
          </Header>
          <Body>
          <TxtWelcome>
            Bem Vindo!
          </TxtWelcome>

          <TxtDescrition>Por favor insira seu email para continuar</TxtDescrition>

          <InputEmail
            mode='outlined'
            label="Email"
            placeholder="example@example.com"
            value={String(email)}
            onChangeText={value => setEmail(value)}
            autoCompleteType="name"
            underlineColor={'#000000'}
            placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
            autoCapitalize="none"
          />

          <BtnLogin 
            disabled={stateBtn}
            onPress={() => {setStateBtn(true), verifyEmail()}}>
            <TxtBtn>{stateBtn ? <Loading  clr={2}/> : "ENTRAR"}</TxtBtn>
          </BtnLogin>

        </Body>
        </ScrollView>
      </Container>
    </>
  )
}

export default Login;