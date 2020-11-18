import axios from "axios";
import { apiEndPoint, API_KEY, BASE_URL, cityIds } from "../../utils/constants";
import { GET_WEATHER_LIST } from "../types";

const url = `${BASE_URL}${apiEndPoint.getWeather}`;
const queryParams = {
  params: {
    appid: API_KEY,
    id: cityIds.join(","),
  },
};
export const fetchWeather = () => async (dispatch) => {
  const res = await axios.get(url, queryParams);
  dispatch({
    type: GET_WEATHER_LIST,
    payload: res.data.list,
  });
};
