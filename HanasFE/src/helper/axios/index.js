import axios from "axios";

const instance = axios.create({
  baseURL: process.env.LOCALHOST,
});

export default instance;
