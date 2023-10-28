import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import store from "./store";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { DarkModeProvider } from "./contexts/darkMode";

import "@Styles/index.css";

const PersistGateConfig = {
  loading: null,
  persistor: persistStore(store),
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate {...PersistGateConfig}>
        <DarkModeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </DarkModeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
