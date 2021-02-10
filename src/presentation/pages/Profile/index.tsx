import React, { useContext, useCallback } from 'react';

import Header from '../../components/Header';

const iconWeb = require('../../../assets/icons/at-sign.png');

import {
  StatusBar,
  Container,
  ScroolView,
  ViewInfo,
  IconTitle,
  TxtTitle,
  ViewTitle,
  ImgIcon,
  TxtInfo,
  TxtTitleInfo,
  Linking,
  TxtInfoLink,
  BtnLink,
  Alert,
} from './styles';

import AuthContext from '../../../data/contexts/Auth';

const Profile: React.FC = () => {
  const { user, logOut } = useContext(AuthContext);

  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(`http://${user?.[0].website}`);

    if (supported) {
      await Linking.openURL(`http://${user?.[0].website}`);
    } else {
      Alert.alert(`Não foi possível abrir o site: ${user?.[0].website}`);
    }
  }, [user?.[0].website]);

  return (
    <>
      <StatusBar backgroundColor={"#E5E5E5"} />

      <Container>
        <ScroolView showsVerticalScrollIndicator={false}>
          <Header />

          <ViewInfo>
            <ViewTitle>
              <IconTitle name="user" size={35} />
              <TxtTitle>Informações Pessoais</TxtTitle>
            </ViewTitle>

            <TxtTitleInfo>Nome</TxtTitleInfo>
            <TxtInfo>{user?.[0].name}</TxtInfo>

            <TxtTitleInfo>Username</TxtTitleInfo>
            <TxtInfo>{user?.[0].username}</TxtInfo>

            <TxtTitleInfo>Email</TxtTitleInfo>
            <TxtInfo>{user?.[0].email}</TxtInfo>

            <TxtTitleInfo>Telefone</TxtTitleInfo>
            <TxtInfo>{user?.[0].phone}</TxtInfo>

            <ViewTitle>
              <IconTitle name="map-pin" size={35} />
              <TxtTitle>Endereço</TxtTitle>
            </ViewTitle>

            <TxtTitleInfo>Rua</TxtTitleInfo>
            <TxtInfo>{user?.[0].address.street}</TxtInfo>

            <TxtTitleInfo>Suíte</TxtTitleInfo>
            <TxtInfo>{user?.[0].address.suite}</TxtInfo>

            <TxtTitleInfo>Cidade</TxtTitleInfo>
            <TxtInfo>{user?.[0].address.city}</TxtInfo>

            <TxtTitleInfo>Cidade</TxtTitleInfo>
            <TxtInfo>{user?.[0].address.city}</TxtInfo>

            <TxtTitleInfo>CEP</TxtTitleInfo>
            <TxtInfo>{user?.[0].address.zipcode}</TxtInfo>

            <TxtTitleInfo>Latitude</TxtTitleInfo>
            <TxtInfo>{user?.[0].address.geo.lat}</TxtInfo>

            <TxtTitleInfo>Longitude</TxtTitleInfo>
            <TxtInfo>{user?.[0].address.geo.lng}</TxtInfo>


            <ViewTitle>
              <ImgIcon source={iconWeb} resizeMode="stretch" />
              <TxtTitle>Website</TxtTitle>
            </ViewTitle>

            <TxtTitleInfo>Link</TxtTitleInfo>
            <BtnLink onPress={() => { handlePress() }}>
              <TxtInfoLink>{user?.[0].website}</TxtInfoLink>
            </BtnLink>

            <ViewTitle>
              <IconTitle name="globe" size={35} />
              <TxtTitle>Empresa</TxtTitle>
            </ViewTitle>

            <TxtTitleInfo>Nome</TxtTitleInfo>
            <TxtInfo>{user?.[0].company.name}</TxtInfo>

            <TxtTitleInfo>Bordão</TxtTitleInfo>
            <TxtInfo>{user?.[0].company.catchPhrase}</TxtInfo>

            <TxtTitleInfo>BS</TxtTitleInfo>
            <TxtInfo>{user?.[0].company.bs}</TxtInfo>

          </ViewInfo>
        </ScroolView>
      </Container>
    </>
  )
}

export default Profile;