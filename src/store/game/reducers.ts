import { GamesState } from './types';
import {
  ConnectGame,
  EGamesActionsTypes,
  SearchBarFocusAction,
} from './actionTypes';

const initialState: GamesState = {
  data: [],
  status: '',
  loading: false,
  isSearchBarFocused: false,
};

const gameReducer = (
  state: GamesState = initialState,
  action: ConnectGame | SearchBarFocusAction,
): GamesState => {
  switch (action.type) {
    case EGamesActionsTypes.CONNECT_GAMES:
      return { ...state, data: action.payload };
    case EGamesActionsTypes.SET_SEARCH_BAR_FOCUS:
      return { ...state, isSearchBarFocused: action.payload };
    default:
      return state;
  }
};

export default gameReducer;
