import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import itemReducer from "./itemReducer";

const reducers = combineReducers({
  cart: cartReducer,
  item: itemReducer,
});

export default reducers;
