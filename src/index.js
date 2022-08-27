import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './app/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import { Layout } from './layouts/layout';
import { ThemeProvider } from './contexts/theme';

let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <Layout>
            <App />
          </Layout>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
