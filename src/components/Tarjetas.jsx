import React, { useState } from 'react'
import styled from '@emotion/styled';

// react-router-dom
import { NavLink as routerNavlink} from 'react-router-dom';

//funciones
import { bgTarjeta } from '../js/Fondo';


const Secciones=styled.div `
  display: flex;
  flex-direction: column;
  
  @media (min-width: 568px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: .5rem;
  }
`

const Card=styled(routerNavlink) `
  height: 25rem;
  color: var(--blanco);
  border-radius:5px;
  margin-bottom: 2rem;
  transition:height 1s ease ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center center;
  position: relative;
  transition: transform 0.5s ease;



  @media (min-width: 568px){
     margin-bottom: 0;
    
  }
  
  h3 {
    margin: 1rem 0;
  }
  p {
    text-align: justify;
    padding: 1rem;
    font-size: 1.4rem;
    line-height: 1.5;
   
  }
  img{
    max-width: 25rem;
    height: 60%;
    margin: 0 auto;
  };
 
`

const Texto=styled.div `
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));
  height: 80%;
  position: absolute;
  border-radius: 0 0 5px 5px;
 
 p{
  padding: 2rem ;
  line-height: 1.4;
  margin: 0;

  @media (min-width: 566px){
    padding: 1rem .7rem ;
    line-height: 1.2;
  }

  @media (min-width: 768px){
     line-height: 1.5;
     padding: 1.5rem;
  }
 }

 
`

function Tarjetas({tarjetas}) {

  const[tarjetaActiva, setTarjetaActiva]= useState(null);

  const handleMouseOver=(indice)=>{
    setTarjetaActiva(indice)
  }

  const handleMouseOut=()=>{
    setTarjetaActiva(null)
  }


  return (
    <>
      <Secciones>

        {tarjetas.map((tarjeta, indice)=>{
            const {title, url, descripcion, img, bgImage}=tarjeta;

            // agregar el fondo a cada tarjeta 
            const bg= bgTarjeta(bgImage)

          return(
            <Card  
              target='_blank'
              key={indice} 
              style={bg}
              to={url} 
              onMouseOver={()=>handleMouseOver(indice)} 
              onMouseOut={handleMouseOut} >
              <h3> {title}</h3>

              <Texto style={{display:tarjetaActiva===indice ? 'block':'none'}}>
                <p>{descripcion}</p>
              </Texto>
             {
              tarjetaActiva!==indice &&
              <img src={img} 
              alt={`imagen fondo de la tarjeta ${title}`}
              height='50px'
              width='210px'/>
             } 
            </Card>

          )
          
        })}
  

       </Secciones> 
    </>
  )
}

export default Tarjetas
