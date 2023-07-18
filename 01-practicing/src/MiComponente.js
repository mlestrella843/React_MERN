//Importar modulos de React y dependencias

import React from "react";
import './App.css';

//Funcion de mi componente
const MiComponente = () => {

    let nombre="Maria";
    let web = "https://marialestrella.com";

    let usuario = {
        nombre:"Julia",
        apellido:"Estrella",
        edad: 45
    }

    return (
        // Siemmpre el return debe renderisarse dentro de un contenedor
        //qure puede ser un fragment vacio, un main o un div.
        <div className="mi-Componente"> 
            <br/>
            <h3>Se ha creado mi componente</h3>
            <h3>Datos del Usuario</h3>
            <ul>
                <li>Nombre: {usuario.nombre}</li>
                <li>Apellido: {usuario.apellido}</li>
                <li>Edad: {usuario.edad}</li>
            </ul>
            <hr/>
            <h3>Cursos de: {usuario.nombre}</h3>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Angular
                </li>
                <li>
                    Vue
                </li>
            </ul>
        </div>
    );    
};

//Export
export default MiComponente;