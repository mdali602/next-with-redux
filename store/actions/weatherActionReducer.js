// import { GET_WEATHER_LIST } from "../types";

import axios from "axios";
import { GET_WEATHER_LIST } from "../types";

export const fetchWeather = () => async (dispatch) => {
  const res = await axios.get(
    "http://api.openweathermap.org/data/2.5/group?appid=e004c66fec9abf08360f675ad4ddb9f1&id=1273294,1275339,1277333,5368361,2643743,1819729,5128581,1850144,2988507,4887398"
  );
  dispatch({
    type: GET_WEATHER_LIST,
    payload: res.data.list,
  });
};
