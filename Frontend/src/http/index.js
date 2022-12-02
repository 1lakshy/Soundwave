import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  header: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

// list of all the endpoints

export const sendFeed = (data) => api.post("/api/send-feed", data);

export const userProfile = (data) => api.post("/api/login",data);