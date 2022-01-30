import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import clothesReducer from "./clothesReducer";
import currencyReducer from "./currencyReducer";
import categoriesReducer from "./categoriesReducer";
import loadingReducer from "./loadingReducer";

const reducers = combineReducers({
  cart: cartReducer,
  clothes: clothesReducer,
  currency: currencyReducer,
  categories: categoriesReducer,
  loading: loadingReducer,
});

export default reducers;
