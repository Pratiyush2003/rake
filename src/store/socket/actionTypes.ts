import { UnknownAction } from 'redux';
import { EActionsTypes } from './types';

export interface DisconnectSocket extends UnknownAction {
  type: EActionsTypes.DISCONNECT;
}
