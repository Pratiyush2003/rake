import { IState } from '../types';

export interface IFiat {
  name: string;
  symbol: string;
  decimals: number;
  exchange?: number;
}

export type FiatExchangeList = {
  [key: string]: number;
};

export enum EFiatsEvents {
  FIATS_CONNECTED = 'fiat-prices',
  FIATS_UPDATE_EXCHANGE = 'FIATS_UPDATE_EXCHANGE',
}

export interface FiatState extends IState<Record<string, IFiat>> {}
