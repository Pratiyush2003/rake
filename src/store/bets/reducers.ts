import { BetsState } from './types';
import { ConnectBet, EBetsActionsTypes, UpdateBet } from './actionTypes';

const initialState: BetsState = {
  data: [],
  status: '',
  loading: false,
};

const betsReducer = (
  state: BetsState = initialState,
  action: ConnectBet | UpdateBet,
): BetsState => {
    if (action.type !== EBetsActionsTypes.CONNECT_BETS) return state;
    return { ...state, data: [...state.data, action.payload] };
    // case EBetsActionsTypes.RECEIVE_BETS_DATA: {
    //   const findBet = state.data.find(
    //     (bet) => bet.hash === action.payload.hash,
    //   );
    //   if (findBet) {
    //     findBet.status = action.payload.status;
    //     findBet.updatedAt = action.payload.updatedAt;
    //     findBet.winAmount = action.payload.winAmount;
    //     findBet.winAmountUsd = action.payload.winAmountUsd;
    //     findBet.multiplier = action.payload.multiplier;
    //     return state;
    //   } else {
    //     return { ...state, data: [...state.data, action.payload] };
    //   }
    // }
    // default:
    //   return state;
  // }
};

export default betsReducer;
