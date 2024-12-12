import { UnknownAction } from 'redux';
import { IUser } from './types';

export enum EUserActionsTypes {
  CONNECT_USER = 'CONNECT_USER',
  RECEIVE_USER_DATA = 'RECEIVE_USER_DATA',
}

export interface ConnectUser extends UnknownAction {
  type: typeof EUserActionsTypes.CONNECT_USER;
  payload: IUser;
}

export interface UpdateUser extends UnknownAction {
  type: typeof EUserActionsTypes.RECEIVE_USER_DATA;
  payload: IUser;
}
