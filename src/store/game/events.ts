import { Dispatch } from 'redux';
import { Socket } from 'socket.io-client';
import { EGamesEvents, IGame } from './types';
import { connectGames, setSearchBarFocus } from './actions';
import { SearchBarFocusAction } from './actionTypes';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';


export const handleGamesSocketEvents = (socket: Socket, dispatch: Dispatch) => {
  socket.on(EGamesEvents.GAMES_CONNECTED, (game: IGame[]) => {
    dispatch(connectGames(game));
  });
};

export const triggerSetSearchBarFocus = (
  isFocused: boolean,
): ThunkAction<void, RootState, unknown, SearchBarFocusAction> => {
  return (dispatch) => {
    dispatch(setSearchBarFocus(isFocused));
  };
};
