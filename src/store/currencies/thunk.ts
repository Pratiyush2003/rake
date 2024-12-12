import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { ICurrency } from './types';
import { selectCurrency } from './actions';
import { SelectCurrency } from './actionTypes';

export const currencySelectDispatcher = (
  message: ICurrency,
): ThunkAction<void, RootState, unknown, SelectCurrency> => {
  return (dispatch) => {
    dispatch(selectCurrency(message));
  };
};
