import { GET_CURRENCY, SET_CURRENCY, SET_CURRENCY_SELECTED } from "./types";

export const getCurrency = () => {
  return {
    type: GET_CURRENCY,
  };
};

export const setCurrency = (currencyName, symbol) => {
  return {
    type: SET_CURRENCY,
    payload: { currencyName, symbol },
  };
};

export const setCurrencySelected = (open) => {
  return {
    type: SET_CURRENCY_SELECTED,
    payload: open,
  };
};
