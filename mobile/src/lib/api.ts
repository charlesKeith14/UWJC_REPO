import axios from "axios";
import Constants from "expo-constants";

const baseURL = (Constants.expoConfig?.extra as any)?.apiBaseUrl || "http://localhost:3000";

export const api = axios.create({ baseURL });

api.interceptors.request.use(async (config) => {
  // TODO: attach JWT from secure storage when auth is implemented
  return config;
});


