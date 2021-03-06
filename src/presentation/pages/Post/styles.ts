import styled from 'styled-components/native';

import resp from '../../responsivity';

import Searchbar from 'react-native-paper/src/components/Searchbar';
import { FlatList } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();

import { IBtnOpacity } from '../../../data/protocols/Post';


export const StatusBar = styled.StatusBar``;

export const Container = styled.View`
  flex: 1;
  background-color: #E5E5E5;
`;

export const ViewHeader = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ViewIconHeader = styled.View`
  width: ${resp(280.5)}px;
  margin-left: ${resp(70)}px;
`;

export const ViewIconExit = styled.View`
  width: ${resp(70.5)}px;
`;

export const BtnExit = styled.TouchableOpacity``;

export const IconExit = styled(Feather)`
  margin-right: ${resp(30)}px;
  align-self: flex-end;
`;


export const SearchBarPost = styled(Searchbar)`
  width: ${resp(350)}px;
  align-self: center;
  margin-bottom: ${resp(40)}px;
`;

export { FlatList };

export const Card = styled.View`
  width: ${resp(350)}px;
  height: ${resp(250)}px;
  background-color: #FFFFFF;
  margin-bottom: ${resp(20)}px;
  elevation: 7;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
`;

export const ScroolView = styled.ScrollView``;

export const SafeAreaView = styled.SafeAreaView``;

export const TxtTitleCard = styled.Text`
  color: #16394D;
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

export const ViewBtnMore = styled.View`
  flex: 1;
  width: ${resp(350)}px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const BtnMore = styled.TouchableOpacity`
  align-self: flex-end;
  padding: ${resp(15)}px;

`;

export const IconArrow = styled(Feather)`
  color: #D9485C;
`;

export const ViewPagination = styled.View`
  width: ${resp(350)}px;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  align-self: center;
  margin-bottom: ${resp(20)}px;
`;

export const BtnRight = styled.TouchableOpacity<IBtnOpacity>`
  opacity: ${props => props.state === false ? 1 : 0.3};
  margin-left: ${resp(13)}px;
`;
export const BtnLeft = styled(BtnRight) <IBtnOpacity>`
`;

export const IconRight = styled(Feather)``;
export const IconLeft = styled(Feather)``;

export const TxtPage = styled.Text`
  font-size: ${resp(15)}px;
`;

export const RefreshControl = styled.RefreshControl``;


