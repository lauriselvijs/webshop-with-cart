import {
  GET_CART_ITEMS,
  ADD_ITEM,
  REMOVE_ITEM,
  OPEN_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  SET_SELECTED_ATTRIBUTE,
  UPDATE_CART,
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
          (item) => item.id !== action.payload.id
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
        cartOpen: !state.cartOpen,
      };
    case UPDATE_CART:
    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload.id)
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
          if (item.id === action.payload.id) {
            if (item.count > 1)
              return { ...item, count: parseInt(item.count) - 1 };
          }
          return item;
        }),
      };
    case UPDATE_CART:
    case SET_SELECTED_ATTRIBUTE:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, attrObj: action.payload.attrObj };
          }
          return item;
        }),
      };
    default:
      return state;
  }
}
