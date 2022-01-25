import {
  GET_CART_ITEMS,
  ADD_ITEM,
  REMOVE_ITEM,
  OPEN_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  SELECT_SIZE,
} from "../actions/types";

const initialState = {
  cartItems: [
    {
      id: "1",
      name: "Apollo Running Pants",
      price: "25",
      sizes: ["s", "m", "l"],
      selectedSize: "l",
      count: "1",
      totalCount: "5",
      img: [
        "https://media.istockphoto.com/photos/sweater-yellow-color-isolated-on-whitetrendy-womens-clothingknitted-picture-id1278802435?k=20&m=1278802435&s=612x612&w=0&h=5Zn7XJcTVmCxSyDtkdHOr5OE0jsrafaQDlaS0_Hr0Pc=",
      ],
    },
    {
      id: "2",
      name: "Apollo Running Shirt",
      price: "50",
      sizes: ["s", "m"],
      selectedSize: "m",
      count: "1",
      totalCount: "6",
      img: [
        "https://media.istockphoto.com/photos/sweater-yellow-color-isolated-on-whitetrendy-womens-clothingknitted-picture-id1278802435?k=20&m=1278802435&s=612x612&w=0&h=5Zn7XJcTVmCxSyDtkdHOr5OE0jsrafaQDlaS0_Hr0Pc=",
      ],
    },
  ],
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
          if (item.id === action.payload) {
            if (item.count < item.totalCount)
              return { ...item, count: parseInt(item.count) + 1 };
          }
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
          console.log(action.payload.id);
          return item;
        }),
      };
    default:
      return state;
  }
}
