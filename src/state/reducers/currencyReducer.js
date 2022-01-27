import {
  GET_CURRENCY,
  SET_CURRENCY,
  SET_CURRENCY_SELECTED,
} from "../actions/types";

const initialState = {
  currencyList: [
    { currencyName: "USD", symbol: "$" },
    { currencyName: "EUR", symbol: "€" },
    { currencyName: "JPY", symbol: "¥" },
  ],
  chosenCurrencyName: "USD",
  chosenSymbol: "$",
  currencySelected: false,
};

export default function getReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENCY:
      return {
        ...state,
      };
    case SET_CURRENCY:
      return {
        ...state,
        chosenCurrencyName: action.payload.currencyName,
        chosenSymbol: action.payload.symbol,
      };
    case SET_CURRENCY_SELECTED:
      return {
        ...state,
        currencySelected: !state.currencySelected,
      };
    default:
      return state;
  }
}
