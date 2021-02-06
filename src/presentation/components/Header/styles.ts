import styled from 'styled-components/native';

import resp from '../../responsivity';

import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: ${resp(20)}px;
`;

export const TxtHeader = styled.Text`
  font-family: Lato;
`;
export const TxtHeaderBold = styled.Text`
  font-family: Lato-Bold;
  color: #D9485C;
`;


export const MessageIcon = styled(Feather)`
  color: #000000;
`;
