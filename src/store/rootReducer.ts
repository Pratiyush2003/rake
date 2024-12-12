import { combineReducers } from 'redux';
import authoidcreducer from './authoidc/reducers'
import { persistedUserReducer } from './user/reducers';
import betsReducer from './bets/reducers';
import transactionsReducer from './transactions/reducers';
import balanceReducer from './balance/reducers';
import gameReducer from './game/reducers';
import gameSlice from './listinggames/gamesSlice'
import currenciesReducer, {
  selectedCurrencyPersistedReducer,
} from './currencies/reducers';
import fiatReducer, { selectedFiatPersistedReducer } from './fiats/reducers';
import marketReducer from './marketData/reducers';
import { selectedLanguagePersistedReducer } from './languages/reducer';
import openModalReducer from './modal/reducer';
import chatsReducer from './chat/reducers';


const rootReducer = combineReducers({
  user: persistedUserReducer,
  bets: betsReducer,
  transactions: transactionsReducer,
  balance: balanceReducer,
  games: gameReducer,
  currencies: currenciesReducer,
  fiats: fiatReducer,
  selectedFiat: selectedFiatPersistedReducer,
  selectedCurrency: selectedCurrencyPersistedReducer,
  marketList: marketReducer,
  language: selectedLanguagePersistedReducer,
  openModal: openModalReducer,
  authOidc: authoidcreducer,
  chat: chatsReducer,
  gamelist: gameSlice,
});

export default rootReducer;
