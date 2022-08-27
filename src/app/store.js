import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import costReducer from '../states/cost'

const reducers = combineReducers({
 costs: costReducer,
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
});