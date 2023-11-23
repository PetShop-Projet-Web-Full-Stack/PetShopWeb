import axios from "axios";

export const RequestApi = axios.create({
  baseURL: "http://localhost:80/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "localhost:3000",
    Referer: "localhost:3000",
  },
  withCredentials: true,
});
