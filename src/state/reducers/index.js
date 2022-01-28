import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import clothesReducer from "./clothesReducer";
import techReducer from "./techReducer";
import currencyReducer from "./currencyReducer";
import categoriesReducer from "./categoriesReducer";
import loadingReducer from "./loadingReducer";

const reducers = combineReducers({
  cart: cartReducer,
  clothes: clothesReducer,
  tech: techReducer,
  currency: currencyReducer,
  categories: categoriesReducer,
  loading: loadingReducer,
});

export default reducers;
