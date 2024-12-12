import { Dispatch } from 'redux';
import { Socket } from 'socket.io-client';
import { EActionsTypes, ESocketMessages } from './types';

export const handleMainSocketEvents = (socket: Socket, dispatch: Dispatch) => {
  socket.on(ESocketMessages.CONNECTED, () => {
    dispatch({ type: EActionsTypes.CONNECT });
  });
  socket.on(ESocketMessages.DISCONNECTED, () => {
    dispatch({ type: EActionsTypes.DISCONNECT });
  });
};

export const handleDisconnectSocket = (socket: Socket) => {
  socket.disconnect();
};
