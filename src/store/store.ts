import { configureStore } from "@reduxjs/toolkit";
import currentCoordinatesReducer from "./slices/currentCoordinatesSlice";
import currentWeatherReducer from "./slices/currentWeatherSlice";
import searchHistoryReducer from "./slices/searchHistorySlice";

export const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    currentCoordinates: currentCoordinatesReducer,
    searchHistory: searchHistoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
