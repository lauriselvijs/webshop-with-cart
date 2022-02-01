import {
  GET_CURRENCY,
  SET_CURRENCY,
  SET_CURRENCY_SELECTED,
} from "../actions/types";

const initialState = {
  products: [
    {
      name: "tech",
      id: "1",
      prices: [
        {
          currency: {
            label: "USD",
          },
          amount: 844.02,
        },
        {
          currency: {
            label: "EUR",
          },
          amount: 606.67,
        },
        {
          currency: {
            label: "AUD",
          },
          amount: 1088.79,
        },
        {
          currency: {
            label: "JPY",
          },
          amount: 91147.25,
        },
        {
          currency: {
            label: "RUB",
          },
          amount: 63826.91,
        },
      ],
    },
  ],
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
