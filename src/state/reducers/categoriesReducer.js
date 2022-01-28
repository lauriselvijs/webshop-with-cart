import {
  GET_CATEGORIES,
  SET_CATEGORY,
  SET_CURRENT_SELECTED_CATEGORY,
} from "../actions/types";

const initialState = {
  categories: [
    { categoryName: "all", selected: true },
    { categoryName: "clothes", selected: false },
    { categoryName: "tech", selected: false },
  ],
  selectedCategory: "all",
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
        categories: state.categories.map((category) => {
          if (category.categoryName === action.payload) {
            return { ...category, selected: true };
          }
          return { ...category, selected: false };
        }),
      };
    case SET_CURRENT_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: state.categories.find((category) => category.selected)
          .categoryName,
      };
    default:
      return state;
  }
}
