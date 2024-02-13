import axios from "axios";

const client = axios.create({
  baseURL: "https://gorest.co.in/public/v2",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer fdfcc11f75c7f7e0902fe7591f04a4514024be5fd521e0c76ad01879a8b3eb90`,
  },
});

export default client;
