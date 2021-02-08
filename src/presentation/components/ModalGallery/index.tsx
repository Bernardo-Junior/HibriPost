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
  ViewBack
} from './styles';

import api from '../../../infra/services/api';

import { Alert, ListRenderItem } from 'react-native';

import { IPhoto } from '../../../data/protocols/ModalGallery';

const ModalGallery: React.FC = () => {
  const { modalGallery, setModalGallery, idAlbum, setIdAlbum, name } = useContext(ModalGalleryContext);
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  useEffect(() => {
    loadGallery();
  }, [idAlbum, modalGallery])

  const loadGallery = useCallback(() => {
    api.get(`/photos?albumId=${idAlbum}`)
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.log("Error no modalGallery")
      })
  }, [idAlbum, modalGallery])

  const renderItem: ListRenderItem<IPhoto> = ({ item }) => {
    return (
      <ContainerCards>
        <BtnImg>
          <Img 
            source={{ uri: `${item.thumbnailUrl}` }} 
            onLoad={e => {}} 
            onError={e => { }} 
            resizeMode="stretch"
          >
            
          </Img>
        </BtnImg>
      </ContainerCards>
    )
  }

  return (
    <Container>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalGallery}
        onRequestClose={() => {
          setPhotos([]);
          setModalGallery(false);
        }}
      >
        <ScroolView>
        <ViewBack>
          <BtnBack onPress={() => {setPhotos([]); setModalGallery(false)}}>
            <IconBack name="arrow-left" size={35} />
          </BtnBack>
          <TxtTitleScreen>{name}</TxtTitleScreen>
        </ViewBack>
        
        <FlatList
          data={photos}
          keyExtractor={photo => String(photo.id)}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          renderItem={renderItem}
        />
        </ScroolView>
      </Modal>
    </Container>
  )
}

export default ModalGallery;