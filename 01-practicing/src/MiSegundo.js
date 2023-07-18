import React from 'react'

export const MiSegundo = () => {

    const libros = ["Harry Potter", "Alicia en el pais de las maravillas", "Narnia"];

    //const libros = [];
  return (
    <div>
        <h3>Este es mi segundo componente</h3>
        <h4>Listado de Libros</h4>
        {/* PRIMERA forma de hacerlo, estaticamente */}
        {/* <ul>
            <li>{libros[0]}</li>
            <li>{libros[1]}</li>
            <li>{libros[2]}</li>

        </ul> */}

        {/* SEGUNDA forma de hacerlo es iterando el arreglo con foreach para un arreglo de tres elementos*/}
        {/* <ul>
            {
                // Hay que especificar un key que sera el identificador unico de cada indice
                libros.map( (libro, indice) =>{
                    return <li key={indice}>{libro}</li>
                })
            }

        </ul> */}
        {/* TERCERA forma de hacerlo, validando si el arreglo esta vacio o no */}
        {libros.length >= 1 ?(
            <ul>
                {
                    libros.map(( libro, indice) => {
                        return <li key={indice}>{libro}</li>
                    })
                }
            </ul>
        )
        : (<p> No hay libros</p>)
        }
    </div>
  )
}

export default MiSegundo;