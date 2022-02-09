import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import currencyReducer from "./currencyReducer";
import categoriesReducer from "./categoriesReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const cartReducerConfig = {
  key: "cart",
  storage: storage,
  blacklist: ["cartOpen"],
};

const reducers = combineReducers({
  cart: persistReducer(cartReducerConfig, cartReducer),
  currency: currencyReducer,
  categories: categoriesReducer,
});

export default reducers;
