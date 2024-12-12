import { MarketState } from './types';
import { EMarketActionsTypes, UpdateMarketPrice } from './actionTypes';

const initialState: MarketState = {
  data: {},
  status: '',
  loading: false,
};

const marketReducer = (
  state: MarketState = initialState,
  action: UpdateMarketPrice,
): MarketState => {
  switch (action.type) {
    case EMarketActionsTypes.RECEIVE_PRICES_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default marketReducer;
