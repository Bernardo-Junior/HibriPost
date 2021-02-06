import styled from 'styled-components/native';

import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();

import TextInput from 'react-native-paper/src/components/TextInput/TextInput';
import { TextInputProps } from "react-native-paper/lib/typescript/components/TextInput/TextInput";

import resp from '../../responsivity';

export const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF;
`;

export const Body = styled.View`
  flex: 1;
  background-color: #FFFFFF;
  padding: ${resp(20)}px ;
  margin: ${resp(30)}px;
  width: ${resp(350)}px;
  justify-content: flex-start;
  align-items: center;
`;

export const StatusBar = styled.StatusBar``;

export const ScrollView = styled.ScrollView``;

export const Header = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin-top: ${resp(30)}px;
  margin-bottom: ${resp(30)}px;
  padding: ${resp(20)}px;
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

export const TxtWelcome = styled.Text`
  font-family: RobotoBold;
  font-size: ${resp(50)}px;
  width: ${resp(350)}px;
  color: #D9485C;
`;

export const TxtDescrition = styled.Text`
  color: #16394D;
  margin-bottom: ${resp(80)}px;
  font-family: RobotoBold;
  font-size: ${resp(16)}px;
  width: ${resp(350)}px;
`;

export const InputEmail = styled(TextInput)<TextInputProps>`
  width: ${resp(350)}px;
  border-radius: ${resp(25)}px;
  align-self: center;
  margin-top: ${resp(30)}px;
  background-color: #FFF;
`;

export const BtnLogin = styled.TouchableOpacity`
  width: ${resp(350)}px;
  height: ${resp(60)}px;
  border-radius: ${resp(10)}px;
  margin-top: ${resp(50)}px;
  background-color: #16394D;
  justify-content: center;
  align-items: center;
`;

export const TxtBtn = styled.Text`
  color: #FFFFFF;
  font-family: RobotoBold;
`;