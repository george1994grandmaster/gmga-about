import axios from "axios";
import { getUserFromLocalStorage } from "./localstorage";

const customFetch = axios.create({
  baseURL: "https://app.mountainguide.ge/api/v1",
});

customFetch.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage();
  if (user) {
    config.headers.common["Authorization"] = `Bearer ${user.token}`;
  }
  return config;
});

export default customFetch;
 