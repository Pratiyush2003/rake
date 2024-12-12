import { UserState } from './types';
import { ConnectUser, UpdateUser, EUserActionsTypes } from './actionTypes';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const userPersistConfig = {
  key: 'user',
  storage,
};

export const userInitialState: UserState = {
  data: null,
  status: '',
  loading: true,
};

const userReducer = (
  state: UserState = userInitialState,
  action: ConnectUser | UpdateUser,
): UserState => {
  switch (action.type) {
    case EUserActionsTypes.CONNECT_USER:
      return { ...state, data: action.payload };
    case EUserActionsTypes.RECEIVE_USER_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const persistedUserReducer = persistReducer(
  userPersistConfig,
  userReducer,
);

export default userReducer;
