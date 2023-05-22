import {useState} from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

// objeto
import { arrayTecnologias } from '../js/Tecnologias'




//styled components
const Tecnologias = styled.div `
   
  @media (min-width: 528px){
     display: grid;
     grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px){
    grid-template-columns: repeat(3, 1fr);
  }

`
const Card=styled(NavLink) `
 text-align: center;
 padding: 2rem;
 display: block;
 margin: 0 auto;
 width: 20rem;
  height: 15rem;
  
  &:hover {
    animation: sobresaltar 1s 1;
  }

  @keyframes sobresaltar {
  from {
    opacity:0.4;
  }
  to {
    opacity:1;
  }
}


 @media (min-width: 528px){
  
 }

 h3{
  text-transform: capitalize;
  color: var(--blanco);
  display: inline;
  padding: 0.2rem 3rem;
  border-radius: 10rem;
 }
`

const Imagen=styled.img `
  max-width: 13rem;
  margin: 0 auto;
`
const Info=styled.p `
  color: var(--blanco);
  text-align: justify;
  margin: 0;
`

export default function Tecnologia() {
  const[tarjetaActiva, setTarjetaActiva]= useState(null);

  const handleMouseOver=(id)=>{
    setTarjetaActiva(id)
  }

  const handleMouseOut=()=>{
    setTarjetaActiva(null)
  }

  return (
    <>

      <Tecnologias>
        
        {arrayTecnologias.map((tecnologia)=>{
             const {nombre,img, id, info, color}=tecnologia;
            
             return(
              <Card
                to={`/portafolio/habilidad/${id}`}
                key={id}
                onMouseOver={()=>handleMouseOver(id)} 
                onMouseOut={handleMouseOut} 
                >
                {tarjetaActiva!==id &&
                <Imagen src={img}></Imagen>}

                {tarjetaActiva === id &&
                  <div>
                    <h3 style={{backgroundColor:color}}>{nombre}</h3>
                    <Info>{info}</Info>
                  </div>
                  }
              </Card>
     
             )
     
           })}
  
      </Tecnologias>
       
    </>
  )
}
