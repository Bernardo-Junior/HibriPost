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
  const { modalGallery, setModalGallery, idAlbum, setIdAlbum, name, setStateModalLoading, stateModalLoading } = useContext(ModalGalleryContext);
  const [photos, setPhotos] = useState<IPhoto[] | null>(null);

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
          <TxtLoading>Carregando Imagens...</TxtLoading>
          <Loading />
        </ContainerLoading>
      </Modal>
    )
  }

  const renderItem: ListRenderItem<IPhoto> = ({ item, index }) => {
    return (
      <ContainerCards>
        <BtnImg>
          <Img
            source={{ uri: `${item.thumbnailUrl}` }}
            onLoad={e => { 
              if(photos?.length === index+1){
                setStateModalLoading(false)
              }
            }}
            onError={e => { setStateModalLoading(false) }}
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
            setTimeout(() => {
              setPhotos(null);
            }, 1000)
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