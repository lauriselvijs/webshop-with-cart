import { GET_CLOTHES, SET_HOVER, UNSET_HOVER } from "./types";

export const getClothes = () => {
  return {
    type: GET_CLOTHES,
  };
};

export const setHover = (id, hover = false) => {
  return {
    type: SET_HOVER,
    payload: { id, hover },
  };
};
