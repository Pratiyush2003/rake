import { LocaleKey } from '@/lib/i18n';
import { LanguageState } from './types';
import storage from 'redux-persist/lib/storage';
import { ELanguageActionTypes, LanguageAction } from './actionsTypes';
import persistReducer from 'redux-persist/es/persistReducer';

export const layoutInitialState: Partial<LanguageState> =  {
  locale: (navigator.languages?.[1] as LocaleKey) ?? LocaleKey.en,
};

const selectedLanguagePersistConfig = {
  key: 'language',
  storage,
};

const languageReducer = (
  state: Partial<LanguageState> = layoutInitialState,
  action: LanguageAction,
): Partial<LanguageState> => {
  switch (action.type) {
    case ELanguageActionTypes.UPDATE_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};

export const selectedLanguagePersistedReducer = persistReducer(
  selectedLanguagePersistConfig,
  languageReducer,
);
