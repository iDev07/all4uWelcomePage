import axios from "axios";
export const instance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
  },
});
