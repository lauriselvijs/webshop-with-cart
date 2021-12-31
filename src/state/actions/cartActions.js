import { GET_ITEMS, ADD_ITEM, REMOVE_ITEM } from "./types";

export const getTimers = () => {
  return {
    type: GET_ITEMS,
  };
};

export const deleteTimer = (id) => {
  return {
    type: ADD_ITEM,
    payload: id,
  };
};

export const addTimer = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};
