import {  Dispatch, SetStateAction } from 'react';

export interface IModaGalleryContext {
  modalGallery: boolean;
  setModalGallery: Dispatch<SetStateAction<boolean>>;
  idAlbum: Number | null;
  setIdAlbum: Dispatch<SetStateAction<Number | null>>;
  name: String;
  setName: Dispatch<SetStateAction<String>>;
}

export interface IPhoto {
  albumId: Number;
  id: Number;
  title: String;
  url: String;
  thumbnailUrl: String;
}
