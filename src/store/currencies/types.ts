import { ENetwork, IState } from '../types';

export interface ICurrencyKey {
  address: string;
  network: ENetwork;
}

export interface ICurrency extends ICurrencyKey {
  name: string;
  symbol: string;
  decimals: number;
  amountUsd: number;
  icon: string;
  isEnable: boolean;
}

export enum ECurrenciesEvents {
  CURRENCIES_CONNECTED = 'crypto-prices',
}

export interface CurrenciesState extends IState<Record<string, ICurrency>> {}
