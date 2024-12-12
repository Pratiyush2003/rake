import { UnknownAction } from 'redux';
import { IBet } from './types';

export enum EBetsActionsTypes {
  CONNECT_BETS = 'CONNECT_BETS',
  RECEIVE_BETS_DATA = 'RECEIVE_BETS_DATA',
  BET = 'BET',
  CLOSE_BET = 'CLOSE_BET',
}

export interface ConnectBet extends UnknownAction {
  type: typeof EBetsActionsTypes.CONNECT_BETS;
  payload: IBet; // or an array of IBet if it receives multiple bets
}

export interface UpdateBet extends UnknownAction {
  type: typeof EBetsActionsTypes.RECEIVE_BETS_DATA;
  payload: IBet; // or an array of IBet if it receives multiple bets
}

export interface BetAction extends UnknownAction {
  type: typeof EBetsActionsTypes.BET;
  payload: IBet; // or an array of IBet if it receives multiple bets
}

export interface CloseBetAction extends UnknownAction {
  type: typeof EBetsActionsTypes.CLOSE_BET;
  payload: IBet; // or an array of IBet if it receives multiple bets
}
