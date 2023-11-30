import axios from "axios";

const host = process.env.REACT_APP_HOST;
const frontPort = process.env.REACT_APP_FRONT_PORT;
const backPort = process.env.REACT_APP_BACK_PORT;

export const RequestApi = axios.create({
  baseURL: `http://${host}:${backPort}/`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": `${host}:${frontPort}`,
  },
  withCredentials: true,
});
