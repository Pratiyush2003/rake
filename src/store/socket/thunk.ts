import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';
import { EActionsTypes } from './types';
import { Action } from 'redux';

export const connectSocket = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => {
  return (dispatch) => {
    dispatch({ type: EActionsTypes.CONNECT });
  };
};

export const disconnectSocket = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => {
  return (dispatch) => {
    dispatch({ type: EActionsTypes.DISCONNECT });
  };
};
