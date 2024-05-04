import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import currentWeatherSlice from "./features/currentWeather/currentWeatherSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    currentWeather: currentWeatherSlice,
  },
});
