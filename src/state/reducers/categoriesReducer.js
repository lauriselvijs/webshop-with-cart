import { GET_CATEGORIES, SET_CATEGORY } from "../actions/types";

const initialState = {
  categories: [
    { categoryName: "all", selected: true },
    { categoryName: "clothes", selected: false },
    { categoryName: "tech", selected: false },
  ],
};

export default function clothesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
      };
    case SET_CATEGORY:
      return {
        ...state,
        categorySet: action.payload,
      };
    default:
      return state;
  }
}
