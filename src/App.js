import React, { useState, useEffect } from "react";
import api from './services/api'; // conexão com a api nodejs url = 'github.com/DavidCastroUFC/Desafio-Conceitos-de-nodejs'
import AddRepo from "./components/AddRepo";
import ShowRepo from "./components/ShowRepo";
import './style/reset.css';
import './style/app.css';
function App() {

  //criando e iniciando o estado com um objeto vazio
  const [repositories, setRepositories] = useState([]);
  
  //listando os repositórios a cada modificação no repositório
  useEffect(()=>{
    api.get('repositories').then(response=>{
      setRepositories(response.data);
    })
  },[repositories]);
  return (
    <div className="container">
      <AddRepo/>
      <ShowRepo repo={repositories}/> 
    </div>
  );
}

export default App;
