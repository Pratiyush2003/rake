import { Dispatch } from 'redux';
import { Socket } from 'socket.io-client';
import { EBalanceEvents, IBalance } from './types';
import { connectBalance } from './actions';

export const handleBalanceSocketEvents = (
  socket: Socket,
  dispatch: Dispatch,
) => {
  socket.on(EBalanceEvents.BALANCE_CONNECTED, (balance: IBalance) => {
    dispatch(connectBalance(balance));
  });
};
