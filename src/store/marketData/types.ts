import { IState } from '../types';

export interface ICoinPrice {
  time: number;
  value: number;
}

export type IMarketList = {
  [key: string]: ICoinPrice;
};

export enum EMarketEvents {
  UPDATE_PRICES = 'UPDATE_PRICES',
}

export interface MarketState extends IState<IMarketList> {}
