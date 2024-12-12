import { ENetwork, IBase, IState } from '../types';
import { ICurrency } from '../currencies/types';
import { IUser } from '../user/types';

export enum ETransactionType {
  BET = 'BET',
  DEPOSIT = 'DEPOSIT',
  WITHDRAWAL = 'WITHDRAW',
}

export enum EDepositType {
  DEPOSIT = 'DEPOSIT',
}

export enum ETransactionStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

export enum EClaimType {
  CLAIM = 'CLAIM',
}

export interface ITransaction extends IBase {
  hash: string;
  currencyNetwork: ENetwork;
  currencyAddress: string;
  n?: number;
  from: string;
  to: string;
  block?: number;
  amount: bigint;
  usd: number;
  date?: string;
  type: ETransactionType;
  status: ETransactionStatus;
  depositType?: EDepositType;
  claimType?: EClaimType;
  extra?: object;
  description?: string;
  user?: IUser;
  currency?: ICurrency;
}

export enum ETransactionEvents {
  TRANSACTION_CONNECTED = 'recent-txs',
  TRANSACTION_UPDATE = 'TRANSACTION_UPDATE',
}

export interface TransactionsState extends IState<ITransaction[]> {}
