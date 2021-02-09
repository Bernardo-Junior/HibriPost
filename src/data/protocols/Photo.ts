import {  Dispatch, SetStateAction } from 'react';


export interface IPhotoContext {
  photos: IPhoto[];
  setPhotos: Dispatch<SetStateAction<IPhoto[]>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  modalPictures: boolean;
  setModalPictures: Dispatch<SetStateAction<boolean>>;
}

export interface IPhoto {
  albumId: Number;
  id: Number;
  title: String;
  url: String;
  thumbnailUrl: String;
}