import { UnknownAction } from 'redux';
import { LanguageState } from './types';

export enum ELanguageActionTypes {
  UPDATE_LANGUAGE = 'UPDATE_LANGUAGE',
}

export interface LanguageAction extends UnknownAction {
  type: ELanguageActionTypes.UPDATE_LANGUAGE;
  payload: Partial<LanguageState>;
}
