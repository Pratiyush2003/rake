import { EMarketActionsTypes, UpdateMarketPrice } from './actionTypes';
import { IMarketList } from './types';

export const updateMarketPrice = (data: IMarketList): UpdateMarketPrice => ({
  type: EMarketActionsTypes.RECEIVE_PRICES_DATA,
  payload: data,
});
