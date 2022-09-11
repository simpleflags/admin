import axios from "axios";

const baseApiUrl = import.meta.env.VITE_BASE_URL?.toString();

export const api = axios.create({
  baseURL: baseApiUrl,
});
