import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { LanguageState } from './types';
import { languageSetState } from './actions';
import { LanguageAction } from './actionsTypes';

export const setLanguageDispatcher = (
  message: Partial<LanguageState>,
): ThunkAction<void, RootState, unknown, LanguageAction> => {
  return (dispatch) => {
    dispatch(languageSetState(message));
  };
};
