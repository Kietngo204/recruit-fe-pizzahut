import { createSlice } from "@reduxjs/toolkit";
import { currentWeather } from "../../actions/currentWeatherActionThunk";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const currentWeatherSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(currentWeather.pending, (state) => {
        state.isLoading = true;
        state.data = [];
        state.error = null;
      })
      .addCase(currentWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(currentWeather.rejected, (state, action) => {
        state.data = [];
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export default currentWeatherSlice.reducer;
