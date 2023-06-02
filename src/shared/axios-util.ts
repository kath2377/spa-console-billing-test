/* istanbul ignore file */
import axios from "axios";

const instance = axios.create({
  headers: {
    Authorization: localStorage.getItem("jwt"),
    "Content-type": "application/json",
  },
});

export default instance;
