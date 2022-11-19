import axios from "axios";

// API iTunes
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export { api };
