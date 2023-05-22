import React from 'react'
import styled from '@emotion/styled'

import { ListadoHabilidades } from '../js/ListadoHabilidades'


// styled components

const Listado=styled.ul `
  color:var(--blanco) ;
  font-size: 2rem;
  list-style-type: circle;
  width: 70%;
  margin: 0 auto;

  li {
    padding: .7rem 0;
  }
`

function HabilidadesBlandas() {
  return (
    <div>
         <Listado>
          {ListadoHabilidades.map((habilidadBlanda)=>{

            const {id, habilidad}=habilidadBlanda;
            return(
    
                <li key={id}>{habilidad}</li>
            
            )

          })}
       </Listado>
      
      
    </div>
  )
}

export default HabilidadesBlandas
