import {
  GET_CART_ITEMS,
  ADD_ITEM,
  REMOVE_ITEM,
  OPEN_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  SELECT_SIZE,
  SELECT_COLOR_CODE,
  UPDATE_PRICE_VALUES,
} from "./types";
import store from "../store";

export const getCartItems = () => {
  return {
    type: GET_CART_ITEMS,
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};

export const addItem = (item) => {
  const hasItem = store
    .getState()
    .cart.cartItems.some((cartItem) => cartItem.id === item.id);

  if (hasItem) {
    return {
      type: INCREASE_QUANTITY,
      payload: item.id,
    };
  } else {
    return {
      type: ADD_ITEM,
      payload: item,
    };
  }
};

export const openCart = () => {
  return {
    type: OPEN_CART,
  };
};

export const incQuantity = (id) => {
  return {
    type: INCREASE_QUANTITY,
    payload: id,
  };
};
export const decQuantity = (id) => {
  const oneItemLeft = store
    .getState()
    .cart.cartItems.some((cartItem) => cartItem.count === 1);

  if (!oneItemLeft) {
    return {
      type: DECREASE_QUANTITY,
      payload: id,
    };
  } else {
    return {
      type: REMOVE_ITEM,
      payload: id,
    };
  }
};

export const selectAttribute = (id, attribute, value) => {
  if (attribute === "text") {
    return {
      type: SELECT_SIZE,
      payload: { id, value },
    };
  } else if (attribute === "swatch") {
    return {
      type: SELECT_COLOR_CODE,
      payload: { id, value },
    };
  }
};

export const selectSize = (id, size) => {
  return {
    type: SELECT_SIZE,
    payload: { id, size },
  };
};

export const selectColorCode = (id, selectColorCode) => {
  return {
    type: SELECT_COLOR_CODE,
    payload: { id, selectColorCode },
  };
};

export const updatePriceValues = () => {
  const cartItemArray = store.getState().cart.cartItems;
  const productsArr = store.getState().currency.products;
  const chosenCurrencyName = store.getState().currency.chosenCurrencyName;

  const newCartItemArr = cartItemArray.map((cartItem) => {
    let result = productsArr.filter((product) => product.id === cartItem.id);

    let newPrice = result[0].prices.find(
      (newPrice) => newPrice.currency.label === chosenCurrencyName
    ).amount;

    if (newPrice) {
      return { ...cartItem, price: newPrice };
    }
    return cartItem;
  });

  return {
    type: UPDATE_PRICE_VALUES,
    payload: newCartItemArr,
  };
};
