import { CurrenciesState, ICurrency } from './types';
import {
  ConnectCurrency,
  ECurrenciesActionsTypes,
  SelectCurrency,
} from './actionTypes';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { createFilteredReducer } from '../filteredReducer';
const initialState: CurrenciesState = {
  data: {},
  status: '',
  loading: false,
};

const initialSelectedState: ICurrency | null = null;

const selectedCurrencyPersistConfig = {
  key: 'selected_currency',
  storage,
};

const connectReducer = createFilteredReducer(
  (
    state: CurrenciesState,
    action: ConnectCurrency,
  ): CurrenciesState => {
    return {
      ...state,
      data: {
        ...state.data,
        [`${action.payload.network}:${action.payload.address}`]: action.payload,
      },
    };
  },
  ECurrenciesActionsTypes.CONNECT_CURRENCIES,
);

export const selectedCurrencyReducer = (
  state: ICurrency | null = initialSelectedState,
  action: SelectCurrency,
): ICurrency | null => {
  switch (action.type) {
    case ECurrenciesActionsTypes.SELECT_CURRENCY:
      return action.payload;
    default:
      return state;
  }
};

export const selectedCurrencyPersistedReducer = persistReducer(
  selectedCurrencyPersistConfig,
  selectedCurrencyReducer,
);

export default function currenciesReducer(state = initialState, action: ConnectCurrency) {
  const updatedState = connectReducer(state, action);
  return updatedState;
}
