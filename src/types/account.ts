export interface Iaccount {
  loginStatus?: string;
  id?: number;
  username?: string;
  displayName?: string;
  password?: string;
  phoneNumber?: string;
  email?: string;
  balance?: number;
  status?: string;
  accessToken?: string;
  roleNames?: [string]
}

export const UPDATE_ACCESSTOKEN = 'ACCESS_TOKEN';
export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';

interface IupdateAccount {
  type: typeof UPDATE_ACCOUNT,
  payload: Iaccount
}

export type accountAction = IupdateAccount

