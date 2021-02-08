import styled from 'styled-components/native';

import resp from '../../responsivity';

import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();

import { Linking, Alert } from 'react-native';

export {Linking, Alert};

export const StatusBar = styled.StatusBar``;

export const ScroolView = styled.ScrollView``;

export const Container = styled.View`
  flex: 1;
  background-color: #E5E5E5;
  justify-content: center;
  align-items: center;
`;

export const ViewInfo = styled.View`
  flex: 1;
  width: ${resp(350)}px;
  margin-bottom: ${resp(30)}px;
`;

export const ViewTitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${resp(30)}px;
`;

export const TxtTitle = styled.Text`
  color: #D9485C;
  margin-left: ${resp(10)}px;
  font-family: OpenSansBold;
  font-size: ${resp(19)}px;
  font-weight: 600;
`;

export const IconTitle = styled(Feather)`
  color: #D9485C;
`;

export const ImgIcon = styled.Image`
  width: ${resp(35)}px;
  height: ${resp(35)}px;
`;

export const TxtTitleInfo = styled.Text`
  font-family: OpenSansBold;
  color: #4F4F4F;
  font-size: ${resp(17)}px;
  margin-top: ${resp(30)}px;
`;

export const TxtInfo = styled.Text`
  color: #000000;
  opacity: 0.54;
  font-family: OpenSans;
  font-size: ${resp(19)}px;
  margin-top: ${resp(10)}px;
`;

export const TxtInfoLink = styled(TxtInfo)`
  text-decoration: underline;
  color: blue;
`;

export const BtnLink = styled.TouchableOpacity``;

