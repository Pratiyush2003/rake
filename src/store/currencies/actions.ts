import {
  ConnectCurrency,
  ECurrenciesActionsTypes,
  SelectCurrency,
} from './actionTypes';
import { ICurrency } from './types';

export const connectCurrencies = (data: ICurrency): ConnectCurrency => ({
  type: ECurrenciesActionsTypes.CONNECT_CURRENCIES,
  payload: data,
});

export const selectCurrency = (data: ICurrency): SelectCurrency => ({
  type: ECurrenciesActionsTypes.SELECT_CURRENCY,
  payload: data,
});
