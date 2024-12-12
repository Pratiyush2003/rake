import { UnknownAction } from 'redux';
import { ICurrency } from './types';

export enum ECurrenciesActionsTypes {
  CONNECT_CURRENCIES = 'CONNECT_CURRENCIES',
  SELECT_CURRENCY = 'SELECT_CURRENCY',
}

export interface ConnectCurrency extends UnknownAction {
  type: typeof ECurrenciesActionsTypes.CONNECT_CURRENCIES;
  payload: ICurrency; // or an array of IBet if it receives multiple bets
}

export interface SelectCurrency extends UnknownAction {
  type: typeof ECurrenciesActionsTypes.SELECT_CURRENCY;
  payload: ICurrency; // or an array of IBet if it receives multiple bets
}
