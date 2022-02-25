import axios from "axios";

export default function apiConnect(method=null, req=null, body=null){
  const url = "https://mindicador.cl/api";
  return axios.get(url);
};