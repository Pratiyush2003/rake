import { ELanguageActionTypes, LanguageAction } from './actionsTypes';
import { LanguageState } from './types';

export const languageSetState = (
  payload: Partial<LanguageState>,
): LanguageAction => ({
  type: ELanguageActionTypes.UPDATE_LANGUAGE,
  payload,
});
