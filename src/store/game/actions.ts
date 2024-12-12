import {
  ConnectGame,
  EGamesActionsTypes,
  SearchBarFocusAction,
} from './actionTypes';
import { IGame } from './types';

export const connectGames = (data: IGame[]): ConnectGame => ({
  type: EGamesActionsTypes.CONNECT_GAMES,
  payload: data,
});

export const setSearchBarFocus = (
  isFocused: boolean,
): SearchBarFocusAction => ({
  type: EGamesActionsTypes.SET_SEARCH_BAR_FOCUS,
  payload: isFocused,
});
