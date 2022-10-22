import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.kontenbase.com/query/api/v1/1b2ea44a-2f7f-455a-be1a-f2cd38a0b987/", 
});

export function setAuthorization(token) {
  if (!token) {
    delete API.defaults.headers.common;
    return;
  }
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
