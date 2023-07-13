//Importar modulos de React y dependencias

import React from "react";

//Funcion de mi componente
const MiComponente = () => {

    return (
        // Siemmpre el return debe renderisarse dentro de un contenedor
        //qure puede ser un fragment vacio, un main o un div.
        <div className="mi-Componente"> 
            <br/>
            <h3>Se ha creado mi componente</h3>
            <p>Este es mi primer componente</p> 
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