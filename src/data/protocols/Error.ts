import {  Dispatch, SetStateAction } from 'react';

export interface IErroContext {
  pressTry: Boolean;
  setPressTry: Dispatch<SetStateAction<Boolean>>;
}