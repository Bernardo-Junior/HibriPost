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
  const size =  {
    width:1080,
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
            <BtnExit onPress={() => {setModalPictures(false)}}>
              <IconExit name={"close"} size={35} />
            </BtnExit>
          </Header>
          <GallerySwiper 
            images={
              photos.map((value, index) => {
                return ( 
                    {
                      uri: `${value.thumbnailUrl}`,
                      dimensions: {width: size.width, height: size.height}
                    }
                )
              }) 
            }
            initialPage={page}
            initialNumToRender={50}
            sensitiveScroll={true}
          />
        </>
      </Modal>
  )
}

export default Gallery;

// [
//   {
//     uri: `${photos[0].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[1].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[2].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[3].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[4].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[5].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[6].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[7].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[8].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[9].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[10].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[11].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[12].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },{
//     uri: `${photos[13].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[14].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[15].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[16].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[17].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[18].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[19].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[20].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[21].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[22].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[23].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[24].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[25].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[26].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[27].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[28].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[29].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[30].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[31].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[32].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[33].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[34].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[35].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[36].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[37].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[38].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[39].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[40].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[41].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[42].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[43].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[44].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[45].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[46].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[47].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[48].url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
//   {
//     uri: `${photos[49]?.url}`,
//     dimensions: {width: size.width, height: size.height}
//   },
// ]