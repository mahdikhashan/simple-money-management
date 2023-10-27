import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducers from "./reducers";

const persistConfig = {
  key: "simple-money-manager",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;
