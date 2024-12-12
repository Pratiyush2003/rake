import { ENetwork, IState } from '../types';
import { ICurrency } from '../currencies/types';
import { IUser } from '../user/types';

export interface IBalanceKey {
  currencyAddress: string;
  currencyNetwork: ENetwork;
}

export interface IBalance extends IBalanceKey {
  amount: bigint;
  award: bigint;
  cashbackSportbookWeekly: bigint;
  cashbackCasinoWeekly: bigint;
  cashbackWeekly: bigint;
  cashbackMonthly: bigint;
  rakeback: bigint;
  referral: bigint;
  currency: ICurrency;
  user?: IUser;
}

export enum EBalanceEvents {
  BALANCE_CONNECTED = 'balance',
  BALANCE_UPDATE = 'BALANCE_UPDATE',
}

export interface BalanceState extends IState<Record<string, IBalance>> {}
