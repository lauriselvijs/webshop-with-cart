import store from "../store";

export const findProductWithSameProps = (item) => {
  return store
    .getState()
    .cart.cartItems.find(
      (cartItem) =>
        cartItem.id === item.id &&
        item.attrObj.size === cartItem.attrObj.size &&
        item.attrObj.usbType === cartItem.attrObj.usbType &&
        item.attrObj.touchId === cartItem.attrObj.touchId &&
        item.attrObj.color === cartItem.attrObj.color
    );
};

export const checkIfArrHasSameAttribute = (item) => {
  return store
    .getState()
    .cart.cartItems.some(
      (cartItem) =>
        cartItem.id === item.id &&
        item.attrObj.size === cartItem.attrObj.size &&
        item.attrObj.usbType === cartItem.attrObj.usbType &&
        item.attrObj.touchId === cartItem.attrObj.touchId &&
        item.attrObj.color === cartItem.attrObj.color
    );
};

export const checkIfObjHasSameAttribute = (attrObj) => {
  return store
    .getState()
    .cart.cartItems.some(
      (cartItem) =>
        attrObj.size === cartItem.attrObj.size &&
        attrObj.usbType === cartItem.attrObj.usbType &&
        attrObj.touchId === cartItem.attrObj.touchId &&
        attrObj.color === cartItem.attrObj.color
    );
};
