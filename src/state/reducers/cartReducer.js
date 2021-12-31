import { GET_ITEMS, ADD_ITEM, REMOVE_ITEM } from "../actions/types";

const initialState = {
  items: [],
  loading: false,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      };

    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
}
