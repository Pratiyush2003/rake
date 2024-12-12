import {
  ConnectFiat,
  EFiatsActionsTypes,
  SelectFiat,
  UpdateFiatExchange,
} from './actionTypes';
import { FiatExchangeList, IFiat } from './types';

export const connectFiats = (data: IFiat): ConnectFiat => ({
  type: EFiatsActionsTypes.CONNECT_FIATS,
  payload: data,
});

export const updateFiatExchange = (
  data: FiatExchangeList,
): UpdateFiatExchange => ({
  type: EFiatsActionsTypes.RECEIVE_FIATS_DATA,
  payload: data,
});

export const selectFiat = (data: IFiat): SelectFiat => ({
  type: EFiatsActionsTypes.SELECT_FIAT,
  payload: data,
});
