import {
  GET_CART_ITEMS,
  ADD_ITEM,
  REMOVE_ITEM,
  OPEN_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  SELECT_SIZE,
  CHANGE_SIZE,
} from "../actions/types";

const initialState = {
  cartItems: [],
  cartOpen: false,
  itemCounter: "0",
  loading: false,
  cartDisplay: "none",
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
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case OPEN_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
        cartDisplay: state.cartOpen ? "none" : "block",
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload)
            return {
              ...item,
              count: parseInt(item.count) + 1,
              selectedSize: action.payload.selectedSize,
            };
          return item;
        }),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload) {
            if (item.count > 1)
              return { ...item, count: parseInt(item.count) - 1 };
          }
          return item;
        }),
      };
    case SELECT_SIZE:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, selectedSize: action.payload.size };
          }
          return item;
        }),
      };
    default:
      return state;
  }
}
