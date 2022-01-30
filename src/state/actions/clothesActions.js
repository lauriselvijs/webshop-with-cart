import {
  GET_CLOTHES,
  GET_CLOTHES_ITEM_BY_ID,
  SELECT_CLOTHES_BY_SIZE,
} from "./types";

export const getClothes = () => {
  return {
    type: GET_CLOTHES,
  };
};

export const getClothesItemById = (id) => {
  return {
    type: GET_CLOTHES_ITEM_BY_ID,
    payload: id,
  };
};

export const selectClothesBySize = (selectedSize) => {
  return {
    type: SELECT_CLOTHES_BY_SIZE,
    payload: selectedSize,
  };
};
