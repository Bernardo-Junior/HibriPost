import {  Dispatch, SetStateAction } from 'react';

export interface IAuthContext {
  signed: Boolean;
  user: IUser[] | null;
  stateBtn: boolean;
  setStateBtn: Dispatch<SetStateAction<boolean>>;
  logIn(email: String): void;
  verifyEmail(email: String): void;
  logOut(): void;
}

export interface IUser {
  id: Number;
  name: String;
  username: String;
  email: String;
  address: IAddress;
  phone: String;
  website: string | undefined;
  company: ICompany;
}

interface IAddress {
  street: String;
  suite: String;
  city: String;
  zipcode: String;
  geo:IGeo;
}

interface IGeo {
  lat: String;
  lng: String;
}

interface ICompany {
  name: String;
  catchPhrase: String;
  bs: String;
}

