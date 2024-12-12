import { ConnectUser, EUserActionsTypes, UpdateUser } from './actionTypes';
import { IUser } from './types';

export const connectUser = (user: IUser): ConnectUser => ({
  type: EUserActionsTypes.CONNECT_USER,
  payload: user,
});

export const updateUser = (user: IUser): UpdateUser => ({
  type: EUserActionsTypes.RECEIVE_USER_DATA,
  payload: user,
});
