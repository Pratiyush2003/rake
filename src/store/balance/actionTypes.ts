import { UnknownAction } from 'redux';
import { IBalance } from './types';

export enum EBalanceActionsTypes {
  CONNECT_BALANCE = 'CONNECT_BALANCE',
}

export interface ConnectBalance extends UnknownAction {
  type: typeof EBalanceActionsTypes.CONNECT_BALANCE;
  payload: IBalance;
}
