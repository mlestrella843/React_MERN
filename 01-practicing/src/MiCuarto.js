import React from 'react'

//Aqui el titulo ya desestructurado en las props es el por default,
//y si no funciona dar valores aqui como title = "Valor por default"
export const MiCuarto = ( {title} ) => {
  
    console.log( title );
  
    return (
    <div>
        
        <h1>Soy el Cuarto Componente</h1>
        <h3>{ title = "Dandole un nuevo valor dentro del cuerpo que tambien de reflejara en la web"}</h3>
        <p>Soy un subtitulo</p>
        
    </div>

  )

}

export default MiCuarto;
