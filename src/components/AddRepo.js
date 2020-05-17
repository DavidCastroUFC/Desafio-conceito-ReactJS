import React from 'react';
import "../style/reset.css";
import api from '../services/api';
import "../style/addRepo.css";
import logo from '../assets/logo.png';
export default function AddRepo() {
    async function addRepository() {
          let title = document.getElementById('titleInput').value;
          let url = document.getElementById('urlInput').value;
          let techs = document.getElementById('techsInput').value;
          api.post('repositories',{
          title:`${title}`,
          url:`${url}`,
          techs:`${techs}`
      });
      document.getElementById('titleInput').value='';
      document.getElementById('urlInput').value='';
      document.getElementById('techsInput').value='';
      }

    return (
        <div className="containerAdd">
            <img  alt= 'logo'src={logo}/>
            <h1>Adicionar Repositório</h1>
            <div className="formAdd">
                <p>Título:</p>
                <input className='formInput' id='titleInput'  placeholder="Título do repositório..."></input>
                <p>Link:</p>
                <input className='formInput' id='urlInput'  placeholder="github.com/nomedeusuario/titulo..."></input>
                <p>Técnologias utilizadas:</p>
                <input className='formInput' id='techsInput'  placeholder="Ex: ReactJS, NodeJS, React Native..."></input>
            </div>
            <button onClick={addRepository}>Adicionar</button>
        </div>



    );

};
