import { Dispatch } from 'redux';
import { Socket } from 'socket.io-client';
import { ETransactionEvents, ITransaction } from './types';
import { connectTransactions, updateTransactions } from './actions';

export const handleTransactionSocketEvents = (
  socket: Socket,
  dispatch: Dispatch,
) => {
  socket.on(
    ETransactionEvents.TRANSACTION_CONNECTED,
    (transaction: ITransaction) => {
      dispatch(connectTransactions(transaction));
    },
  );

  socket.on(
    ETransactionEvents.TRANSACTION_UPDATE,
    (transaction: ITransaction) => {
      dispatch(updateTransactions(transaction));
    },
  );
};
