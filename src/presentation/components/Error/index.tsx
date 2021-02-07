import React, { useContext } from 'react';

import {
  Container,
  IconSignal,
  CircleViewIcon,
  TxtError,
  BtnTry,
  TxtTry
} from './styles';

import ErrorContext from '../../../data/contexts/Error';

const Error: React.FC = () => {
  const { setPressTry } = useContext(ErrorContext);
  return (
    <Container>
        <CircleViewIcon>
          <IconSignal name="priority-high" size={100} />
        </CircleViewIcon>

        <TxtError>
          Erro de conexão
        </TxtError>

        <BtnTry onPress={() => {setPressTry(true)}}>
          <TxtTry>Tentar Novamente</TxtTry>
        </BtnTry>
    </Container>
  )
}

export default Error;