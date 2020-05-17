import React from 'react';
import api from '../services/api';
import "../style/reset.css";
import "../style/showRepo.css";
import Remove from '../assets/remove.png';
import gitHub from '../assets/github.png';
export default function ShowRepo(props) {
    function handleRemoveRepository(id) {
        api.delete(`repositories/${id}`)
      }
    return (
        <div className="containerShow">
            <h1>Repositórios</h1>
            {props.repo.map(
                repository =>
                    <ul className="containerList" key={repository.id}>
                        <li><a href={repository.url}><img className = 'githubIcon' alt="link github repository" src={gitHub} /></a></li>
                        <li className="title">{repository.title}</li>
                        <li><img id='delete' onClick={() => handleRemoveRepository(repository.id)} className = 'removeIcon' alt="Delete Repository from list" src={Remove}/></li>
                    </ul>
            )
            }
        </div>
    );

};
