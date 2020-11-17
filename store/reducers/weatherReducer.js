import { GET_WEATHER_LIST } from "../types";

const initialState = {
  list: [],
  loading: false,
  error: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_LIST:
      return { ...state, list: action.payload, loading: false, error: null };
    default:
      return state;
  }
};
