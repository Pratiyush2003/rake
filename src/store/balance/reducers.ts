import { ConnectBalance, EBalanceActionsTypes } from './actionTypes';
import { createFilteredReducer } from '../filteredReducer';
import { BalanceState } from './types';

const initialState: BalanceState = { data: {}, status: '', loading: false };

const balance = createFilteredReducer(
  (state: BalanceState = initialState, action: ConnectBalance) => {
    return {
      ...state,
      data: {
        ...state.data,
        [`${action.payload.currencyAddress}:${action.payload.currencyNetwork}`]: action.payload,
      },
    };
  },
  EBalanceActionsTypes.CONNECT_BALANCE,
);

export default function balanceReducer(state: BalanceState = initialState, action: ConnectBalance) {
  const balanceState = balance(state, action);
  return balanceState;
}
