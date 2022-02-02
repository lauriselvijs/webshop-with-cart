import { GET_CATEGORIES, SET_CURRENT_SELECTED_CATEGORY } from "./types";

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
  };
};

export const setCurrentSelectedCategory = (category) => {
  return {
    type: SET_CURRENT_SELECTED_CATEGORY,
    payload: category,
  };
};
