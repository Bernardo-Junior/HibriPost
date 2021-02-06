import styled from 'styled-components/native';

import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();

import resp from '../responsivity';

export const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF;
`;

export const Header = styled.View`
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

export const StatusBar = styled.StatusBar``;

export const MessageIcon = styled(Feather)`
  color: #000000;
`;