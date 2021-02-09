import styled from 'styled-components/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
AntDesign.loadFont();

import resp from '../../responsivity';

export const Header = styled.View`
  position: relative;
  background-color: #000000;
  padding: 10px;
  align-items: flex-end;
  height: ${resp(50)}px;
  width: ${resp(411)}px;
`;

export const BtnExit = styled.TouchableOpacity`

`;

export const IconExit = styled(AntDesign)`
  color: #FFFFFF;
`;