// import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './layout.tsx';
import './index.css';
import { Provider } from 'react-redux';
import store, { persistor } from './store/index.ts';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
);
