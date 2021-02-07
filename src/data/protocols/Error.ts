import {  Dispatch, SetStateAction } from 'react';

export interface IErroContext {
  pressTry: Number;
  setPressTry: Dispatch<SetStateAction<Number>>;
}

export interface Props {
  opt: Number
}