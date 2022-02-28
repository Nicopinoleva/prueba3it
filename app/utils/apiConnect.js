import axios from "axios";

export default function apiConnect(request=null){
  var url = 'https://mindicador.cl/api';
  request && (url = "https://mindicador.cl/api/"+request);
  return axios.get(url);
};