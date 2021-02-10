import React, { useContext, useState } from 'react';

import { Modal } from 'react-native';

import GallerySwiper from "react-native-gallery-swiper";

import PhotoContext from '../../../data/contexts/Photo';

import {
  Header,
  BtnExit,
  IconExit
} from './styles';

const Gallery: React.FC = () => {
  const { photos, page, modalPictures, setModalPictures } = useContext(PhotoContext);
  const size = {
    width: 1080,
    height: 1920
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalPictures}
      onRequestClose={() => {
        setModalPictures(false);
      }}>
      <>
        <Header>
          <BtnExit onPress={() => { setModalPictures(false) }}>
            <IconExit name={"close"} size={35} />
          </BtnExit>
        </Header>
        <GallerySwiper
          images={
            photos.map((value, index) => {
              return (
                {
                  uri: `${value.url}`,
                  dimensions: { width: size.width, height: size.height }
                }
              )
            })
          }
          initialPage={page}
          initialNumToRender={photos.length}
          sensitiveScroll={true}
        />
      </>
    </Modal>
  )
}

export default Gallery;