import styled from 'styled-components/native';

import resp from '../../responsivity';

import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();

import { Alert, FlatList, Modal, } from 'react-native';

export const Container = styled.View`
  position: absolute;
  flex: 1;
  height: ${resp(500)}px;
  background-color: #E5E5E5;
`;

export const ScroolView = styled.ScrollView`
  flex: 1;
  background-color: #E5E5E5;
`;

export const BtnBack = styled.TouchableOpacity``;

export const IconBack = styled(Feather)`
  color: #828282;
  padding: ${resp(15)}px;
`;

export const Card = styled.View`
  width: ${resp(350)}px;
  background-color: #FFFFFF;
  margin-bottom: ${resp(20)}px;
  elevation: 7;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: ${resp(25)}px;
`;

export const TxtTitleCard = styled.Text`
  color: #D9485C;
  font-family: OpenSansBold;
  font-size: ${resp(18)}px;
  width: ${resp(300)}px;
  margin-top: ${resp(15)}px;
`;

export const TxtInfocard = styled.Text`
  color: #4F4F4F;
  font-family: OpenSans;
  font-size: ${resp(16)}px;
  width: ${resp(300)}px;
  margin-top: ${resp(15)}px;
`;

export {Alert, FlatList, Modal};

export const TxtTitle = styled.Text`
  font-family: OpenSansBold;
  color: #16394D;
  font-size: ${resp(20)}px;
  padding: ${resp(27)}px;
`;

export const ViewComment = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${resp(27)}px;
`;

export const CicleView = styled.View`
  width: ${resp(60)}px;
  height: ${resp(60)}px;
  border-radius: ${resp(40)}px;
  background-color: #16394D;
  align-items: center;
  justify-content: center;
  
`;

export const MessageIcon = styled(Feather)`
  color: #FFFFFF;
`;

export const ViewInfoComment = styled.View`
  flex-direction: column;
  margin-left: ${resp(20)}px;
`;

export const TxtName = styled.Text`
  color: #2F80ED;
  font-size: ${resp(20)}px;
  width: ${resp(265)}px;
  font-family: OpenSans;
`;

export const TxtEmail = styled.Text`
  color: #000000;
  opacity: 0.42;
  font-family: OpenSans;
`;

export const TextBody = styled.Text`
  color: #000000;
  width: ${resp(350)}px;
  font-size: ${resp(19)}px;
  align-self: center;
  font-family: OpenSans;
  margin-bottom: ${resp(20)}px;
`;

export const ContainerError = styled.View`
  flex: 1;
  margin-top: ${resp(60)}px;
`;

