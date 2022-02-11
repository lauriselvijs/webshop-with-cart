import {
  GET_CART_ITEMS,
  ADD_ITEM,
  REMOVE_ITEM,
  OPEN_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  SET_SELECTED_ATTRIBUTE,
} from "../actions/types";

const initialState = {
  cartItems: [],
  cartOpen: false,
  loading: false,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems,
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.uniqueId !== action.payload.uniqueId
        ),
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case OPEN_CART:
      return {
        ...state,
        cartOpen: action.payload,
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.uniqueId === action.payload.uniqueId)
            return {
              ...item,
              count: parseInt(item.count) + 1,
            };
          return item;
        }),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.uniqueId === action.payload.uniqueId) {
            if (item.count > 1)
              return { ...item, count: parseInt(item.count) - 1 };
          }
          return item;
        }),
      };
    case SET_SELECTED_ATTRIBUTE:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.uniqueId === action.payload.uniqueId) {
            return { ...item, attrObj: action.payload.attrObj };
          }
          return item;
        }),
      };
    default:
      return state;
  }
}
