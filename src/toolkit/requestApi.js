import axios from "axios";

export const RequestApi = axios.create({
  baseURL: "http://localhost:80/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "localhost:2001",
    Referer: "http://localhost:2001",
  },
  withCredentials: true,
});
