import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import currencyReducer from "./currencyReducer";
import categoriesReducer from "./categoriesReducer";

const reducers = combineReducers({
  cart: cartReducer,
  currency: currencyReducer,
  categories: categoriesReducer,
});

export default reducers;
