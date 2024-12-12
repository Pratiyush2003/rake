import { UnknownAction } from 'redux';
import { ITransaction } from './types';

export enum ETransactionsActionsType {
  CONNECT_TRANSACTION = 'CONNECT_TRANSACTION',
  RECEIVE_TRANSACTIONS_DATA = 'RECEIVE_TRANSACTIONS_DATA',
}

export interface ConnectTransaction extends UnknownAction {
  type: typeof ETransactionsActionsType.CONNECT_TRANSACTION;
  payload: ITransaction; // or an array of IBet if it receives multiple bets
}
export interface UpdateTransaction extends UnknownAction {
  type: typeof ETransactionsActionsType.RECEIVE_TRANSACTIONS_DATA;
  payload: ITransaction; // or an array of IBet if it receives multiple bets
}
