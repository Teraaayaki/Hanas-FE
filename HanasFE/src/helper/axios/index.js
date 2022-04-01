import axios from "axios";

const instance = axios.create({
  baseURL: process.env.HANAS_ENDPOINT,
});

export default instance;
