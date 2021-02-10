import styled from 'styled-components/native';

import resp from '../../responsivity';

import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();

import { Alert, FlatList, Modal, ImageProps } from 'react-native';


export const Container = styled.View`
  position: absolute;
  flex: 1;
  background-color: #E5E5E5;
`;

export const TxtTitleScreen = styled.Text`
  font-size: ${resp(20)}px;
  font-family: OpenSansBold;
  color: #D9485C;
  align-self: flex-start;
  width: ${resp(350)}px;
  margin-top: ${resp(15)}px;
  margin-bottom: ${resp(35)}px;
`;

export { Alert, FlatList, Modal };


export const BtnCards = styled.TouchableOpacity`
`;

export const Img = styled.Image<ImageProps>`
  width: ${resp(129)}px;
  height: ${resp(127)}px;
`;

export const ViewFlatlist = styled.View`
  width: ${resp(400)}px;
  align-self: center;
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
  flexBasis: 0;
  margin-bottom: ${resp(4)}px;
`;

export const IconBack = styled(Feather)`
  color: #828282;
`;

export const BtnBack = styled.TouchableOpacity``;

export const ViewBack = styled.View`
  padding: ${resp(20)}px;
`;

export const ContainerLoading = styled.View`
  flex: 1;
  background-color: 'rgba(50,0,0,0.1)';
  justify-content: center;
  align-items: center;
`;

export const TxtLoading = styled.Text`
  font-family: OpenSansBold;
  font-size: ${resp(20)}px;
  margin-bottom: ${resp(20)}px;
`;