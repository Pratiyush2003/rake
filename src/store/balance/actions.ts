import { ConnectBalance, EBalanceActionsTypes } from './actionTypes';
import { IBalance } from './types';

export const connectBalance = (data: IBalance): ConnectBalance => ({
  type: EBalanceActionsTypes.CONNECT_BALANCE,
  payload: data,
});
