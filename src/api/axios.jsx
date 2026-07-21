import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

api.interceptors.request.use((config) => {
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJZb3Vzc29mIiwicm9sZSI6W3siYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9XSwiaWF0IjoxNzg0NTY2MzA1LCJleHAiOjE3ODQ2NTI3MDV9.N9gbExS-0T05mVLmdqg7nRcr-pDea1Wf3d-ZV1vqIcw";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;