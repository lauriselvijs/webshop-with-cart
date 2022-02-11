import {
  GET_CART_ITEMS,
  ADD_ITEM,
  REMOVE_ITEM,
  OPEN_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  SET_SELECTED_ATTRIBUTE,
} from "./types";
import store from "../store";
import { v4 as uuidv4 } from "uuid";
import {
  checkIfArrHasSameAttribute,
  findProductWithSameProps,
  checkIfObjHasSameAttribute,
} from "./cartHelpers";

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
  const hasSameAttribute = checkIfArrHasSameAttribute(item);
  const getElementWithSameProps = findProductWithSameProps(item);

  let newItem = {};

  if (!hasSameAttribute) {
    const uniqueId = uuidv4();
    newItem = { ...item, uniqueId };
  }

  const { uniqueId } = getElementWithSameProps || {};

  if (hasSameAttribute) {
    return {
      type: INCREASE_QUANTITY,
      payload: { uniqueId },
    };
  } else {
    return {
      type: ADD_ITEM,
      payload: newItem,
    };
  }
};

export const openCart = (open) => {
  return {
    type: OPEN_CART,
    payload: open,
  };
};

export const incQuantity = (uniqueId) => {
  return {
    type: INCREASE_QUANTITY,
    payload: { uniqueId },
  };
};
export const decQuantity = (uniqueId) => {
  const oneItemLeft = store
    .getState()
    .cart.cartItems.some((cartItem) => cartItem.count === 1);

  if (!oneItemLeft) {
    return {
      type: DECREASE_QUANTITY,
      payload: { uniqueId },
    };
  } else {
    return {
      type: REMOVE_ITEM,
      payload: { uniqueId },
    };
  }
};

export const setSelectedAttribute = (uniqueId, attrObj) => {
  const hasSameAttribute = checkIfObjHasSameAttribute(attrObj);

  if (!hasSameAttribute)
    return {
      type: SET_SELECTED_ATTRIBUTE,
      payload: { uniqueId, attrObj },
    };
};
