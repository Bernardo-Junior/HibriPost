import styled from 'styled-components/native';

import resp, { width } from '../../responsivity';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
MaterialIcons.loadFont();

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CircleViewIcon = styled.View`
  width: ${resp(100)}px;
  height: ${resp(100)}px;
  border-radius: ${resp(80)}px;
  background-color: #D9485C;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const IconSignal = styled(MaterialIcons)`
  color: #FFFFFF;
`;

export const TxtError = styled.Text`
  font-size: ${resp(25)}px;
  font-family: OpenSansBold;
  color: gray;
  margin-top: ${resp(20)}px;
`;

export const BtnTry = styled.TouchableOpacity`
  margin-top: ${resp(40)}px;
  justify-content: center;
  align-items: center;
`;

export const TxtTry = styled.Text`
  color: #2F80ED;
  text-align: center;
  font-size: ${resp(16)}px;
  font-family: OpenSansBold;
`;