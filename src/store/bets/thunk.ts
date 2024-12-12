import { IBet } from './types';
import { BetAction, CloseBetAction } from './actionTypes';
import { betAction, closeBetAction } from './actions';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';

export const placeBetDispatcher = (
  message: IBet,
): ThunkAction<void, RootState, unknown, BetAction> => {
  return (dispatch) => {
    dispatch(betAction(message));
  };
};

export const closeBetDispatcher = (
  message: IBet,
): ThunkAction<void, RootState, unknown, CloseBetAction> => {
  return (dispatch) => {
    dispatch(closeBetAction(message));
  };
};
