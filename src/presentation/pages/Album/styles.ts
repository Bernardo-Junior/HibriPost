import styled from 'styled-components/native';

import { FlatList, RefreshControl } from 'react-native';

import Searchbar from 'react-native-paper/src/components/Searchbar';

import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();

import { IBtnOpacity } from '../../../data/protocols/Album';

import resp from '../../responsivity';

export const StatusBar = styled.StatusBar``;

export const Container = styled.View`
  flex: 1;
  background-color: #E5E5E5;
`;

export const SearchBarPost = styled(Searchbar)`
  width: ${resp(350)}px;
  align-self: center;
  margin-bottom: ${resp(40)}px;
`;

export {FlatList, RefreshControl};

export const ContainerCards = styled.View`
  flex: 1;
  align-items: center;
`;

export const BtnCards = styled.TouchableOpacity``;

export const Cards = styled.View`
  margin-top: ${resp(20)}px;
  width: ${resp(100)}px;
  height: ${resp(100)}px;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

export const ScroolView = styled.ScrollView``;

export const TxtTitle = styled.Text`
  width: ${resp(100)}px;
  font-family: OpenSansBold;
  text-align: left;
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
export const BtnLeft = styled(BtnRight)<IBtnOpacity>`
`;

export const IconRight = styled(Feather)``;
export const IconLeft = styled(Feather)``;

export const TxtPage = styled.Text`
  font-size: ${resp(15)}px;
`;