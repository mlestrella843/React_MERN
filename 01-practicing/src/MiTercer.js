import React from 'react'

//Esta es la promera forma utilizando las props que me traen todas las caracteristicas
// export const MiTercer = (props) => {
//     console.log(props);
//   return (
//     <div>
//         <h3>Mi Tercer Componente</h3>
//         <h4>Comunicacion entre componentes</h4>   
//     </div>
//   )
// }

//Segunda forma utilizando la desestructiracion 

 const MiTercer = ({nombre, apellido, ficha}) => {
    
    return (
    <div>
        <h3>Mi Tercer Componente</h3>
        <h4>Comunicacion entre componentes</h4>   
        {/* Aqui se estan recibiendo los datos pertenecientes al Segundo componente usamndo la desestructiracion */}
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>{ficha.altura}</li>
            <li>{ficha.estado}</li>
        </ul>
    </div>
  )
}

export default MiTercer;
