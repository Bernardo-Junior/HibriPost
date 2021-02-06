import React from 'react';

import {
  Container,
  TxtHeader,
  TxtHeaderBold,
  StatusBar,
  MessageIcon,
  Header
} from './styles';

const Login: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor={"#FFF"} />
      <Container>
        <Header>
          <MessageIcon name={"message-circle"} size={35} />
          <TxtHeader>
            Hibri
          <TxtHeaderBold>
            POST
          </TxtHeaderBold>
          </TxtHeader>
        </Header>
      </Container>
    </>
  )
}

export default Login;