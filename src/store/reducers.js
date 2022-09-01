import { combineReducers } from "redux";
import costReducer from "./cost/slices";

const reducers = combineReducers({
 costs: costReducer,
});

export default reducers;