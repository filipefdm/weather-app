import { api } from "../../lib/axiosConfig";
import { currentWeatherSlice } from "../slices/currentWeatherSlice";
import { AppDispatch } from "../store";

export const fetchCurrentWeatherByCity =
  (city: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
      const url = `data/2.5/weather?q=${city}`;

      const response = await api.get(url);
      const data = response.data;

      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(data));
    } catch (error) {
      dispatch(
        currentWeatherSlice.actions.fetchCurrentWeatherError(
          "Ocorreu um erro na requisição!"
        )
      );
    }
  };
