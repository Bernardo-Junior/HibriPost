import React, { useContext, useEffect, useCallback, useState } from 'react';

import ModalGalleryContext from '../../../data/contexts/ModalGallery';

import {
  Container,
  Modal,
  TxtTitleScreen,
  FlatList,
  BtnCards,
  Img,
  BtnImg,
  ScroolView,
  TxtTitle,
  ContainerCards,
  BtnBack,
  IconBack,
  ViewBack,
  ContainerLoading,
  TxtLoading
} from './styles';

import api from '../../../infra/services/api';

import { Alert, ListRenderItem } from 'react-native';

import Loading from '../Loading';

import { IPhoto } from '../../../data/protocols/ModalGallery';

const ModalGallery: React.FC = () => {
  const { modalGallery, setModalGallery, idAlbum, setIdAlbum, name } = useContext(ModalGalleryContext);
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [stateLoading, setStateLoading] = useState<Boolean>(true);
  const [stateModalLoading, setStateModalLoading] = useState<boolean>(false);

  useEffect(() => {
    loadGallery();
  }, [idAlbum, modalGallery])

  const loadGallery = useCallback(() => {
    api.get(`/photos?albumId=${idAlbum}`)
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        setStateModalLoading(false);
        console.log("Error no modalGallery")
      })
  }, [idAlbum, modalGallery])

  const ModalLoading = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={stateModalLoading}
        onRequestClose={() => {
          setStateModalLoading(false);
        }}
      >
        <ContainerLoading>
          <TxtLoading>Carregando...</TxtLoading>
          <Loading />
        </ContainerLoading>
      </Modal>
    )
  }

  const renderItem: ListRenderItem<IPhoto> = ({ item }) => {
    return (
      <ContainerCards>
        <BtnImg>
          <Img
            source={{ uri: `${item.thumbnailUrl}` }}
            onLoad={e => { setStateLoading(false), setStateModalLoading(false) }}
            onLoadStart={() => { setStateLoading(true), setStateModalLoading(true) }}
            onError={e => { setStateLoading(false), setStateModalLoading(false) }}
            resizeMode="stretch"
          >
          </Img>
        </BtnImg>
      </ContainerCards>
    )
  }

  return (
    <>
    {ModalLoading()}
      <Container>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalGallery}
          onRequestClose={() => {
            setPhotos([]);
            setStateModalLoading(false);
            setModalGallery(false);
          }}
        >
          <ScroolView>
            <ViewBack>
              <BtnBack onPress={() => { setPhotos([]); setModalGallery(false) }}>
                <IconBack name="arrow-left" size={35} />
              </BtnBack>
              <TxtTitleScreen>{name}</TxtTitleScreen>
            </ViewBack>

            <FlatList
              data={photos}
              keyExtractor={photo => String(photo.id)}
              showsVerticalScrollIndicator={false}
              numColumns={4}
              renderItem={renderItem}
            />
          </ScroolView>
        </Modal>
      </Container>
    </>
  )
}

export default ModalGallery;