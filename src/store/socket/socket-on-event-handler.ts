import { Dispatch } from 'redux';
import { Socket } from 'socket.io-client';
import { handleUserSocketEvents } from '../user/events';
import { handleBalanceSocketEvents } from '../balance/events';
import { handleGamesSocketEvents } from '../game/events';
import { handleTransactionSocketEvents } from '../transactions/events';
import { handleBetsSocketEvents } from '../bets/events';
import { handleCurrenciesSocketEvents } from '../currencies/events';
import { handleFiatsSocketEvents } from '../fiats/events';
import { handleMarketPricesSocketEvents } from '../marketData/events';
import { handleMainSocketEvents } from './events';

export default function handlerOnEvents(socket: Socket, dispatch: Dispatch) {
  const handlers = [
    handleMainSocketEvents,
    handleUserSocketEvents,
    handleGamesSocketEvents,
    handleTransactionSocketEvents,
    handleBetsSocketEvents,
    handleCurrenciesSocketEvents,
    handleFiatsSocketEvents,
    handleMarketPricesSocketEvents,
    handleBalanceSocketEvents,
  ];
  handlers.forEach((handler) => handler(socket, dispatch));
}
