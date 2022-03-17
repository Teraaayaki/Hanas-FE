import axios from "axios";

const instance = axios.create({
  baseURL: "https://hanas-be-express-api.herokuapp.com/",
});

export default instance;
