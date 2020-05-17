import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.0.100:3333/", //ip da minha rede local, coloquei assim para poder acessar pelo celular
  //mas o padrão é http://localhost:3333/   a porta 3333 foi definida no backend node no arquivo server.js
});

export default api;
