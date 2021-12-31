import { GET_ITEMS } from "../actions/types";

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
    default:
      return state;
  }
}
