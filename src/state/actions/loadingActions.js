import { SET_LOADING } from "./types";

export const setLoading = (loading = true) => {
  return {
    type: SET_LOADING,
    payload: loading,
  };
};
