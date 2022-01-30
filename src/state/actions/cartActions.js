import {
  GET_CART_ITEMS,
  ADD_ITEM,
  REMOVE_ITEM,
  OPEN_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  SELECT_SIZE,
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
export const selectSize = (id, size) => {
  return {
    type: SELECT_SIZE,
    payload: { id, size },
  };
};
