import { CurrentWeather } from "@/store/types/currentWeather";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface CurrentWeatherState {
  weather: CurrentWeather | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: CurrentWeatherState = {
  weather: null,
  isLoading: false,
  error: null,
};

export const currentWeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(state, action: PayloadAction<CurrentWeather>) {
      state.weather = action.payload;
      state.isLoading = false;
    },
    fetchCurrentWeatherError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {} = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
