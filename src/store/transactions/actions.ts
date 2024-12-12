import {
  ConnectTransaction,
  ETransactionsActionsType,
  UpdateTransaction,
} from './actionTypes';
import { ITransaction } from './types';

export const connectTransactions = (
  data: ITransaction,
): ConnectTransaction => ({
  type: ETransactionsActionsType.CONNECT_TRANSACTION,
  payload: data,
});

export const updateTransactions = (data: ITransaction): UpdateTransaction => ({
  type: ETransactionsActionsType.RECEIVE_TRANSACTIONS_DATA,
  payload: data,
});
