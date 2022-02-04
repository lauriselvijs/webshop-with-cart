import {
  GET_CATEGORIES,
  SET_CURRENT_SELECTED_CATEGORY,
} from "../actions/types";

const initialState = {
  selectedCategory: "all",
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
      };
    case SET_CURRENT_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
}
