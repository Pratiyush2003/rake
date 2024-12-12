import { FiatState, IFiat } from './types';
import {
  ConnectFiat,
  EFiatsActionsTypes,
  SelectFiat,
  UpdateFiatExchange,
} from './actionTypes';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { createFilteredReducer } from '../filteredReducer';

const initialState: FiatState = {
  data: {},
  status: '',
  loading: false,
};

const selectedFiatPersistConfig = {
  key: 'selected_fiat',
  storage,
};

const initialSelectedState: IFiat | null = null;

const connectFiats = createFilteredReducer(
  (state: FiatState = initialState, action: ConnectFiat): FiatState => {
    return { ...state, data: { ...state.data, data: action.payload } };
  },
  EFiatsActionsTypes.CONNECT_FIATS,
);

const selectFiat = createFilteredReducer(
  (state = initialState, action: SelectFiat) => {
    state.data.selected = action.payload;
    return state;
  },
  EFiatsActionsTypes.SELECT_FIAT,
);

export const selectedFiatReducer = (
  state: IFiat | null = initialSelectedState,
  action: SelectFiat,
): IFiat | null => {
  switch (action.type) {
    case EFiatsActionsTypes.SELECT_FIAT:
      return action.payload;
    default:
      return state;
  }
};

export const selectedFiatPersistedReducer = persistReducer(
  selectedFiatPersistConfig,
  selectedFiatReducer,
);

export default function fiatReducer(state = initialState, action: ConnectFiat | UpdateFiatExchange) {
  const connState = connectFiats(state, action);
  const selectState = selectFiat(connState, action);
  return selectState;
}
