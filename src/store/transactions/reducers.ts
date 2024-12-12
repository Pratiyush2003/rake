import { TransactionsState } from './types';
import {
  ConnectTransaction,
  ETransactionsActionsType,
  UpdateTransaction,
} from './actionTypes';

export const transactionInitialState: TransactionsState = {
  data: [],
  status: '',
  loading: false,
};

const transactionsReducer = (
  state: TransactionsState = transactionInitialState,
  action: ConnectTransaction | UpdateTransaction,
): TransactionsState => {
  // switch (action.type) {
    return action.type !== ETransactionsActionsType.CONNECT_TRANSACTION ?
      state :
      { ...state, data: [...state.data, action.payload] };
    // case ETransactionsActionsType.RECEIVE_TRANSACTIONS_DATA:
    //   return { ...state, data: [...state.data, action.payload] };
    // default:
    //   return state;
  // }
};

export default transactionsReducer;
