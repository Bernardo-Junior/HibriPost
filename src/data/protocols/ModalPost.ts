import {  Dispatch, SetStateAction } from 'react';

import { IPost } from '../protocols/Post';
 
export interface IModalPost {
  post: IPost | null;
  setPost: Dispatch<SetStateAction<IPost | null>>;
  stateModal: boolean;
  setStateModal: Dispatch<SetStateAction<boolean>>;
}

export interface IComment {
  postId: Number;
  id: Number;
  name: String;
  email: String;
  body: String;
}