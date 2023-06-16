import axios from "axios";

const baseURL = "https://api.openweathermap.org/";

export const api = axios.create({
  baseURL: baseURL,
});

api.interceptors.request.use((config) => {
  config.url =
    config.url + "&units=metric' + '&appid=7fa6f49dd9cede25accd83dc938eb6c0";
  return config;
});
