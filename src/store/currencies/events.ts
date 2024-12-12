import { Dispatch } from 'redux';
import { Socket } from 'socket.io-client';
import { ECurrenciesEvents, ICurrency } from './types';
import { connectCurrencies } from './actions';

export const handleCurrenciesSocketEvents = (
  socket: Socket,
  dispatch: Dispatch,
) => {
  socket.on(
    ECurrenciesEvents.CURRENCIES_CONNECTED,
    (currencies: ICurrency) => {
      dispatch(connectCurrencies(currencies));
    },
  );
};
