import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import clothesReducer from "./clothesReducer";
import techReducer from "./techReducer";
import currencyReducer from "./currencyReducer";
import categoriesReducer from "./categoriesReducer";

const reducers = combineReducers({
  cart: cartReducer,
  clothes: clothesReducer,
  tech: techReducer,
  currency: currencyReducer,
  categories: categoriesReducer,
});

export default reducers;
