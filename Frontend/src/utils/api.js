// src/utils/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://todolist-backend-jdwc.onrender.com", // change if your backend URL is different
});

// Automatically attach token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
