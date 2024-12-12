import { UnknownAction } from 'redux';
import { IMarketList } from './types';

export enum EMarketActionsTypes {
  RECEIVE_PRICES_DATA = 'RECEIVE_PRICES_DATA',
}

export interface UpdateMarketPrice extends UnknownAction {
  type: typeof EMarketActionsTypes.RECEIVE_PRICES_DATA;
  payload: IMarketList;
}
