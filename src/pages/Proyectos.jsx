import styled from '@emotion/styled'
import React from 'react';
import { useState } from 'react';

import {MisProyectos} from '../js/MisProyectos'
import {bgTarjeta} from '../js/Fondo';
import { buscarTecnologia } from '../js/Acciones';


const Title=styled.h2 `
  color:var(--blanco);
  font-size:3.5rem;
  
`

const Listado=styled.div `
  text-align: center;

  @media (min-width: 768px){
    display:grid ;
    grid-template-columns: repeat(2,50%);
    gap: 1.5rem;
    align-items:center;
    justify-content: center;
  }

  p{
    font-size: 1.5rem;
    text-align: justify;
    padding: 0 3rem;
  }

`

const Nombre=styled.h3`
  font-size: 2rem;
  color: var(--beige);
  margin: 1rem 0;
`

const Myproyecto=styled.div `
  padding: 2rem 0;
  display: block;
  max-width: 60rem;
  height: 47rem;
  margin: 0 auto;
  color: var(--blanco);
  line-height: 1.55;
  margin-bottom: 2rem;
  box-shadow: .5px 1px 1px 1px var(--beige);

  background-repeat: no-repeat;
  background-size:  cover  ;
  background-position: center;
  

  @media (min-width: 768px){
   width: 100%;
  }

  &:hover {
    animation: ease-in;
  }
`

const Contenedor=styled.div `
  overflow: hidden;
  background-color:var(--gris);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 42rem;
  padding: 0 0 2.1rem 0;
  

  @media (min-width: 768px){
    
  }
 
`

const Herramientas=styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 10px;
  justify-content:space-around;
  align-items: center;
  max-width: 60%;
  animation: scroll linear infinite 13s;
 
  min-height: 84.8%;  
  

  img{
    max-width: 8rem;
  }
`


const Info=styled.div `
  color: var(--blanco);
  
  

`
const Btn=styled.a `
  display:block;
  padding: .8rem 5rem;
  font-size: 1.6rem;
  background-color: var(--beige);
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 20px;
  font-weight:700;

  margin-bottom: 1.4rem;

`

const Repo=styled.div `
  margin-top: 3rem;
  text-align: center;
  color: var(--blanco);
  font-size: 1.8rem;

  a{
    color: red;
    font-size: 2rem;
    font-weight: 600;
  }
`

function Proyectos() {

  const[tarjetaActiva, setTarjetaActiva]= useState(null);

  const handleMouseOver=(indice)=>{
    setTarjetaActiva(indice)
  }

  const handleMouseOut=()=>{
    setTarjetaActiva(null)
  }
  return (
    <div>
      <Title>Proyectos</Title>

      <Listado> 
        {MisProyectos.map((proyecto)=>{
          const {nombre, id,bg, info, tecnologiasUsadas, demo, github}=proyecto

            const fondo=bgTarjeta(bg)


          return(
            <Myproyecto
              onMouseOver={()=>handleMouseOver(id)} 
              onMouseOut={handleMouseOut} 
              key={id} 
              style={fondo}>
              <Nombre>{nombre}</Nombre>

              <Contenedor >
              <p>{info}</p>
              
               <Herramientas 
                style={{display:tarjetaActiva!==id ? 'flex':'none'}}>
                 {tecnologiasUsadas.map(tecnologia=>{
              
                   const habilidades=buscarTecnologia(tecnologia.nombre)
              
                     
                   return(
                     habilidades.map(habilidad=>{
              
                       return(
                         <img 
                         
                          key={habilidad.id} 
                          src={habilidad.img} alt='imagen'/>
                       )
              
                     })
              
                   )
                     
                 })}
              
               </Herramientas>

                {tarjetaActiva===id &&
                  <Info>
                    {demo && 
                    <Btn target="_blank" href={demo}>Ver demo</Btn>}
                    <Btn target="_blank" href={github}>Ver repositorio</Btn>
                  </Info>
                
                } 

             </Contenedor>
              

            </Myproyecto>
          
          )
        })}
      </Listado>


      <Repo>
        <p>Aqui encontrarás más proyectos,  <a href='https://github.com/Alejool?tab=repositories' target="_blank">dale click aqui</a>  </p>
      </Repo>
      
     
    

      
    </div>
  )
}

export default Proyectos
