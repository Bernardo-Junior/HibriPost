import {  Dispatch, SetStateAction } from 'react';

export interface IModaGalleryContext {
  modalGallery: boolean;
  setModalGallery: Dispatch<SetStateAction<boolean>>;
  idAlbum: Number | null;
  setIdAlbum: Dispatch<SetStateAction<Number | null>>;
  name: String;
  setName: Dispatch<SetStateAction<String>>;
  stateModalLoading: boolean;
  setStateModalLoading: Dispatch<SetStateAction<boolean>>;
}

export interface IPhoto {
  albumId: Number;
  id: Number;
  title: String;
  url: String;
  thumbnailUrl: String;
}
