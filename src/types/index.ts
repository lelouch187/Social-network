export interface IPost {
  id: string;
  text: string;
}
export interface IUser {
  id: string;
  name: string;
  fullName: string;
  avatar: string;
}
interface IPhotos {
  small?: string | null;
  large?: string | null;
}

export interface IFethUser {
  name: string;
  id: number;
  uniqueUrlName?: string | null;
  photos: IPhotos;
  status?: string | null;
  followed: boolean;
}
export interface IResponseUsers {
  items: IFethUser[];
  totalCount: number;
  error?: string | null;
}
export interface IPaginate {
  page: number;
  userInPage: number;
}

export interface IContacts {
  facebook: string | null;
  website: string | null;
  vk: string | null;
  twitter: string | null;
  instagram: string | null;
  youtube: string | null;
  github: string | null;
  mainLink: string | null;
}

export interface IProfileUser {
  aboutMe: string | null;
  contacts: IContacts;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string;
  userId: number;
  photos: IPhotos;
}
export interface Data {
  id: number;
  login: string;
  email: string;
}
interface AuthTrue {
  data: Data;
  messages: string[];
  fieldsErrors: string[];
  resultCode: 0;
}
interface AuthFalse {
  data: {};
  messages: string[];
  fieldsErrors: string[];
  resultCode: 1;
}

export type IAuth = AuthTrue | AuthFalse;

export interface AuthLogin {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: boolean;
}
