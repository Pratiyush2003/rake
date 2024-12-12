import { Dispatch } from 'redux';
import { Socket } from 'socket.io-client';
import { EFiatsEvents, FiatExchangeList, IFiat } from './types';
import { connectFiats, updateFiatExchange } from './actions';

export const handleFiatsSocketEvents = (socket: Socket, dispatch: Dispatch) => {
  socket.on(EFiatsEvents.FIATS_CONNECTED, (fiats: IFiat) => {
    dispatch(connectFiats(fiats));
  });
  socket.on(EFiatsEvents.FIATS_UPDATE_EXCHANGE, (fiats: FiatExchangeList) => {
    dispatch(updateFiatExchange(fiats));
  });
};
