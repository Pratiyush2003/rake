import { Dispatch } from 'redux';
import { Socket } from 'socket.io-client';
import { EBetsEvents, IBet } from './types';
import { connectBets, updateBets } from './actions';

export const handleBetsSocketEvents = (socket: Socket, dispatch: Dispatch) => {
  socket.on(EBetsEvents.BETS_CONNECTED, (bets: IBet) => {
    dispatch(connectBets(bets));
  });

  socket.on(EBetsEvents.BETS_UPDATE, (bets: IBet) => {
    dispatch(updateBets(bets));
  });
};

export const handlePlaceBetSocketEvent = (socket: Socket, payload: IBet) => {
  socket.emit(EBetsEvents.PLACE_BET, payload);
};

export const handleCloseBetSocketEvent = (socket: Socket, payload: IBet) => {
  socket.emit(EBetsEvents.CLOSE_BET, payload);
};
