import { configureStore } from '@reduxjs/toolkit';
import socketMiddleware, { socket } from './middleware';
import { useDispatch as useReduxDispatch } from 'react-redux';
import handlerOnEvents from './socket/socket-on-event-handler';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(socketMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useReduxDispatch<AppDispatch>();

handlerOnEvents(socket, store.dispatch);

export const persistor = persistStore(store);

export default store;
