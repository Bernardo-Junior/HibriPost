import React, { useContext, useEffect, useCallback, useState } from 'react';

import ModalGalleryContext from '../../../data/contexts/ModalGallery';

import PhotoContext from '../../../data/contexts/Photo';

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
  TxtLoading,
  ViewFlatlist
} from './styles';

import Gallery from '../Gallery';

import api from '../../../infra/services/api';

import { Alert, ListRenderItem } from 'react-native';

import Loading from '../Loading';

import { IPhoto } from '../../../data/protocols/ModalGallery';

const ModalGallery: React.FC = () => {
  const { 
    modalGallery, 
    setModalGallery, 
    idAlbum, 
    setIdAlbum, 
    name, 
    setStateModalLoading, 
    stateModalLoading 
  } = useContext(ModalGalleryContext);
  
  const { setPage, photos, setPhotos, setModalPictures } = useContext(PhotoContext);

  useEffect(() => {
    setPhotos([])
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
          <Loading clr={1} />
        </ContainerLoading>
      </Modal>
    )
  }

  const renderItem: ListRenderItem<IPhoto> = ({ item, index }) => {
    return (
      <ContainerCards>
        <BtnImg onPress={() => {  setPage(index), setModalPictures(true)}}>
          <Img
            source={{ uri: `${item.thumbnailUrl}` }}
            onLoad={e => {
              if (photos?.length === index + 1) {
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
      <Gallery />
      <Container>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalGallery}
          onRequestClose={() => {
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

            <ViewFlatlist>
              <FlatList
                data={photos}
                keyExtractor={photo => String(photo.id)}
                showsVerticalScrollIndicator={false}
                numColumns={3}
                renderItem={renderItem}
              />
            </ViewFlatlist>
            </ScroolView>
        </Modal>
      </Container>
    </>
  )
}

export default ModalGallery;