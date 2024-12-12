import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { IFiat } from './types';
import { selectFiat } from './actions';
import { SelectFiat } from './actionTypes';

export const fiatSelectDispatcher = (
  message: IFiat,
): ThunkAction<void, RootState, unknown, SelectFiat> => {
  return (dispatch) => {
    dispatch(selectFiat(message));
  };
};
