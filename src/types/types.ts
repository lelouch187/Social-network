export interface IPost {
  id: string;
  text: string;
}
export interface IUser {
  id: string;
  name:string;
  fullName:string;
  avatar:string;
}
interface Photos {
  small?: string | null;
  large?: string | null;
}

export interface IFethUser {
  name: string;
  id: number;
  uniqueUrlName?: any;
  photos: Photos;
  status?: any;
  followed: boolean;
}