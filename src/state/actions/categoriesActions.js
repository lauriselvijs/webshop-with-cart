import { GET_CATEGORIES, SET_CATEGORY } from "./types";

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
