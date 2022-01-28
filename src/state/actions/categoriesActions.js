import {
  GET_CATEGORIES,
  SET_CATEGORY,
  SET_CURRENT_SELECTED_CATEGORY,
} from "./types";

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
  };
};

export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    payload: category,
  };
};

export const setCurrentSelectedCategory = () => {
  return {
    type: SET_CURRENT_SELECTED_CATEGORY,
  };
};
