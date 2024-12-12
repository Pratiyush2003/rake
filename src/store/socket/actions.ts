import { DisconnectSocket } from './actionTypes';
import { EActionsTypes } from './types';

export const disconnectSocket = (): DisconnectSocket => ({
  type: EActionsTypes.DISCONNECT,
});
