import { Dispatch } from 'redux';
import { Socket } from 'socket.io-client';
import { EMarketEvents, IMarketList } from './types';
import { updateMarketPrice } from './actions';

export const handleMarketPricesSocketEvents = (
  socket: Socket,
  dispatch: Dispatch,
) => {
  socket.on(EMarketEvents.UPDATE_PRICES, (prices: IMarketList) => {
    dispatch(updateMarketPrice(prices));
  });
};
