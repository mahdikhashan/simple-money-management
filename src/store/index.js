// TODO: follow Ilia's pattern for store minification

import { configureStore } from "@reduxjs/toolkit";
import persistedReducer from './persist'

export default configureStore({
  reducer: persistedReducer,
});