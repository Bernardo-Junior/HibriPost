export interface IAuthContext {
  signed: Boolean;
  user: IUser | null;
  logIn(email: String): void;
  logOut(): void;
}

export interface IUser {
  id: Number;
  name: String;
  username: String;
  email: String;
  address: IAddress;
  phone: String;
  website: String;
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

