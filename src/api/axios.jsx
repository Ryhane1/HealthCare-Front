import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

api.interceptors.request.use((config) => {
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJZb3Nzb2YiLCJyb2xlIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJpYXQiOjE3ODQ4MjI1NzIsImV4cCI6MTc4NzQxNDU3Mn0.GbJsZJL69g7bFOtPBo5XcLHyomIZdU2ybZmG5cUKMVY";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;