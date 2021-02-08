import styled from 'styled-components/native';

import resp from '../../responsivity';

import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();

import { Alert, FlatList, Modal, } from 'react-native';

export const Container = styled.View`
  position: absolute;
  flex: 1;
  background-color: #E5E5E5;
`;

export const TxtTitleScreen = styled.Text`
  align-self: center;
  font-size: ${resp(20)}px;
  font-family: OpenSansBold;
  color: #D9485C;
  align-self: flex-start;
  width: ${resp(350)}px;
  margin-top: ${resp(15)}px;
`;

export { Alert, FlatList, Modal };


export const BtnCards = styled.TouchableOpacity``;

export const Img = styled.Image`
  margin-top: ${resp(20)}px;
  width: ${resp(100)}px;
  height: ${resp(100)}px;
`;

export const BtnImg = styled.TouchableOpacity``;

export const ScroolView = styled.ScrollView`
  flex: 1;
  background-color: #E5E5E5;
`;

export const TxtTitle = styled.Text`
  width: ${resp(100)}px;
  font-family: OpenSansBold;
  text-align: left;
  color: #D9485C;
`;

export const ContainerCards = styled.View`
  flex: 1;
  align-items: center;
`;

export const IconBack = styled(Feather)`
  color: #828282;
`;

export const BtnBack = styled.TouchableOpacity``;

export const ViewBack = styled.View`
  padding: ${resp(20)}px;
`;