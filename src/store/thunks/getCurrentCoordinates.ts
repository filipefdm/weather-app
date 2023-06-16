import {
  Coordinates,
  currentCoordinatesSlice,
} from "../slices/currentCoordinatesSlice";
import { AppDispatch } from "../store";

export const getCurrentCoordinates = () => (dispatch: AppDispatch) => {
  const storedPosition = localStorage.getItem("currentPosition");

  if (storedPosition) {
    const currentPosition: Coordinates = JSON.parse(storedPosition);
    dispatch(
      currentCoordinatesSlice.actions.setCurrentCoordinatesSuccess(currentPosition)
    );
    return;
  }

  const successCallback = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    const currentPosition: Coordinates = { latitude, longitude };

    dispatch(
      currentCoordinatesSlice.actions.setCurrentCoordinatesSuccess(currentPosition)
    );

    localStorage.setItem("currentPosition", JSON.stringify(currentPosition));
  };

  const errorCallback = (error: GeolocationPositionError) => {
    dispatch(
      currentCoordinatesSlice.actions.setCurrentCoordinatesError(error.message)
    );
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
};
