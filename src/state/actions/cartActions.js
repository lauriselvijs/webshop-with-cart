import {
  GET_CART_ITEMS,
  ADD_ITEM,
  REMOVE_ITEM,
  OPEN_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  SET_SELECTED_ATTRIBUTE,
  UPDATE_CART,
} from "./types";
import store from "../store";
import { v4 as uuidv4 } from "uuid";

export const getCartItems = () => {
  return {
    type: GET_CART_ITEMS,
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: { id },
  };
};

export const addItem = (item) => {
  const hasItem = store
    .getState()
    .cart.cartItems.some((cartItem) => cartItem.id === item.id);

  let newItem = {};

  if (!hasItem) {
    const uniqueId = uuidv4();
    newItem = { ...item, uniqueId };
  } else {
    Object.assign(newItem, item);
  }

  const hasSameAttribute = store
    .getState()
    .cart.cartItems.some(
      (cartItem) =>
        cartItem.uniqueId === newItem.uniqueId &&
        newItem.attrObj.size === cartItem.attrObj.size &&
        newItem.attrObj.usbType === cartItem.attrObj.usbType &&
        newItem.attrObj.touchId === cartItem.attrObj.touchId &&
        newItem.attrObj.color === cartItem.attrObj.color
    );

  console.log(hasSameAttribute);

  const { id, attrObj } = item;

  if (hasSameAttribute) {
    return {
      type: INCREASE_QUANTITY,
      payload: { id },
    };
  } else {
    return {
      type: ADD_ITEM,
      payload: item,
    };
  }
};

export const openCart = (open) => {
  return {
    type: OPEN_CART,
    payload: open,
  };
};

export const incQuantity = (id) => {
  return {
    type: INCREASE_QUANTITY,
    payload: { id },
  };
};
export const decQuantity = (id) => {
  const oneItemLeft = store
    .getState()
    .cart.cartItems.some((cartItem) => cartItem.count === 1);

  if (!oneItemLeft) {
    return {
      type: DECREASE_QUANTITY,
      payload: { id },
    };
  } else {
    return {
      type: REMOVE_ITEM,
      payload: { id },
    };
  }
};

export const setSelectedAttribute = (id, attrObj) => {
  return {
    type: SET_SELECTED_ATTRIBUTE,
    payload: { id, attrObj },
  };
};
