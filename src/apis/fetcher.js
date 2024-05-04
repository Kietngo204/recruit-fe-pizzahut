import axios from "axios";

export const fetcher = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
  params: {
    key: "36849c0390454373ba440652240405",
  },
});
