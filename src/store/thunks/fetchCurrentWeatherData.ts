import { api } from "../../lib/axiosConfig";
import { Coordinates } from "../slices/currentCoordinatesSlice";
import { currentWeatherSlice } from "../slices/currentWeatherSlice";
import { AppDispatch } from "../store";

export const fetchCurrentWeatherData =
  (coordinates: Coordinates) => async (dispatch: AppDispatch) => {
    try {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
      const url = `data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}`;

      const { data } = await api.get(url);

      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(data));
      return;
    } catch (error) {
      dispatch(
        currentWeatherSlice.actions.fetchCurrentWeatherError(
          "Ocorreu um erro na requisição!"
        )
      );
    }
  };
