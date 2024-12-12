import { UnknownAction } from 'redux';
import { IGame } from './types';

export enum EGamesActionsTypes {
  CONNECT_GAMES = 'CONNECT_GAMES',
  SET_SEARCH_BAR_FOCUS = 'SET_SEARCH_BAR_FOCUS',
}

export interface ConnectGame extends UnknownAction {
  type: typeof EGamesActionsTypes.CONNECT_GAMES;
  payload: IGame[]; // or an array of IBet if it receives multiple bets
}

export interface SearchBarFocusAction extends UnknownAction {
  type: typeof EGamesActionsTypes.SET_SEARCH_BAR_FOCUS;
  payload: boolean;
}
