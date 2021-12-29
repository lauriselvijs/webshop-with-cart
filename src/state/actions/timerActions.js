import { GET_TIMERS, ADD_TIMER, DELETE_TIMER } from "./types";

export const getTimers = () => {
  return {
    type: GET_TIMERS,
  };
};

export const deleteTimer = (id) => {
  return {
    type: DELETE_TIMER,
    payload: id,
  };
};

export const addTimer = (timer) => {
  return {
    type: ADD_TIMER,
    payload: timer,
  };
};
