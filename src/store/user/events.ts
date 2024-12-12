import { Dispatch } from 'redux';
import { Socket } from 'socket.io-client';
import { EUserEvents, IUser } from './types';
import { connectUser, updateUser } from './actions';

export const handleUserSocketEvents = (socket: Socket, dispatch: Dispatch) => {
  socket.on(EUserEvents.USER_CONNECTED, (user: IUser) => {
    dispatch(connectUser(user));
  });

  socket.on(EUserEvents.USER_UPDATE, (user: IUser) => {
    dispatch(updateUser(user));
  });
};
