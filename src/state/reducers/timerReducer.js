import { GET_TIMERS, ADD_TIMER, DELETE_TIMER } from "../actions/types";

const initialState = {
  timers: [],
  loading: false,
};

export default function timerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TIMERS:
      return {
        ...state,
      };

    case DELETE_TIMER:
      return {
        ...state,
        timers: state.timers.filter((timer) => timer.id !== action.payload),
      };

    case ADD_TIMER:
      return {
        ...state,
        timers: [...state.timers, action.payload],
      };
    default:
      return state;
  }
}
