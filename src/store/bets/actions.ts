import {
  BetAction,
  CloseBetAction,
  ConnectBet,
  EBetsActionsTypes,
  UpdateBet,
} from './actionTypes';
import { IBet } from './types';

export const connectBets = (data: IBet): ConnectBet => ({
  type: EBetsActionsTypes.CONNECT_BETS,
  payload: data,
});

export const updateBets = (data: IBet): UpdateBet => ({
  type: EBetsActionsTypes.RECEIVE_BETS_DATA,
  payload: data,
});

export const betAction = (data: IBet): BetAction => ({
  type: EBetsActionsTypes.BET,
  payload: data,
});

export const closeBetAction = (data: IBet): CloseBetAction => ({
  type: EBetsActionsTypes.CLOSE_BET,
  payload: data,
});
