import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "persist-key",
  storage,
  blacklist: ["currency", "cart"],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
const persistor = persistStore(store);

export default store;
export { persistor };
