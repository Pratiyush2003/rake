import { UnknownAction } from 'redux';
import { FiatExchangeList, IFiat } from './types';

export enum EFiatsActionsTypes {
  CONNECT_FIATS = 'CONNECT_FIATS',
  RECEIVE_FIATS_DATA = 'RECEIVE_FIATS_DATA',
  SELECT_FIAT = 'SELECT_FIAT',
}

export interface ConnectFiat extends UnknownAction {
  type: typeof EFiatsActionsTypes.CONNECT_FIATS;
  payload: IFiat;
}

export interface UpdateFiatExchange extends UnknownAction {
  type: typeof EFiatsActionsTypes.RECEIVE_FIATS_DATA;
  payload: FiatExchangeList;
}

export interface SelectFiat extends UnknownAction {
  type: typeof EFiatsActionsTypes.SELECT_FIAT;
  payload: IFiat;
}
