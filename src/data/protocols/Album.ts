import {  Dispatch, SetStateAction } from 'react';

export interface IAlbum {
  userId: Number;
  id: Number;
  title: String;
}

export interface IBtnOpacity {
  state: boolean;
}

export interface IStatePage {
  page: number;
  setStateBtnLeft: Dispatch<SetStateAction<boolean>>;
   setStateBtnRight: Dispatch<SetStateAction<boolean>>;
}