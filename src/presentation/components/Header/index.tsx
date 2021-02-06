import React from 'react';

import {
  Container,
  MessageIcon,
  TxtHeader,
  TxtHeaderBold
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <MessageIcon name={"message-circle"} size={35} />
      <TxtHeader>
        Hibri
            <TxtHeaderBold>
          POST
            </TxtHeaderBold>
      </TxtHeader>
    </Container>
  )
}

export default Header;