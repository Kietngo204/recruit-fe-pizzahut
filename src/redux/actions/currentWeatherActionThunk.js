import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetcher } from "../../apis/fetcher";

export const currentWeather = createAsyncThunk(
  "location/weather",
  async (q) => {
    try {
      const res = await fetcher.get("/current.json", {
        params: {
          q: q || "London",
        },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);
