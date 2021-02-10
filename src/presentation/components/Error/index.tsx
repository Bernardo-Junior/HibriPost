import React, { PropsWithChildren, ReactChild, ReactComponentElement, ReactNode, useContext } from 'react';

import {
  Container,
  IconSignal,
  CircleViewIcon,
  TxtError,
  BtnTry,
  TxtTry
} from './styles';

import { Props } from '../../../data/protocols/Error';

import ErrorContext from '../../../data/contexts/Error';

const Error: React.FC<Props> = (props) => {
  const { setPressTry, pressTry } = useContext(ErrorContext);
  return (
    <Container>
      <CircleViewIcon>
        <IconSignal name="priority-high" size={100} />
      </CircleViewIcon>

      <TxtError>
        Erro de conexão
        </TxtError>

      <BtnTry onPress={() => { setPressTry(props.opt) }}>
        <TxtTry>Tentar Novamente</TxtTry>
      </BtnTry>
    </Container>
  )
}

export default Error;