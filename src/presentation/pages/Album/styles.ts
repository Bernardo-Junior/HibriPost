import styled from 'styled-components/native';

import { FlatList } from 'react-native';

import Searchbar from 'react-native-paper/src/components/Searchbar';

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

export {FlatList};