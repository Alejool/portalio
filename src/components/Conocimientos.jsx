import React from 'react'
import { useState } from 'react'


import styled from '@emotion/styled'

//styled components
const ListadoEducacion= styled.div `
 margin-block:6rem;
 overflow-x: hidden;

  @media (min-width: 768px){
     display: grid;
     grid-template-columns: repeat(2, 1fr);
     justify-content: center;
     align-items: center;
     gap: 2rem;
  }

  
`
const Educacion=styled.div `
  position: relative;
  background-color: var(--gris  );
  min-height:20rem ;
  margin-bottom: 2rem;
  transition: transform .5s ease-in-out;
  transition: background-color .5s ease-in;
  max-width:55rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  border-radius: 2px 2px 10px 10px ;
  box-shadow: 0px 5px 9px -7px var(--blanco);
  transform: translateX(0);
  border: 2px var(--gris) solid;

  &::after {
      position: absolute;
      content: '';
      display: block;
      width: 8.7rem;
      height:8.7rem;
      top:0;
      right: 0;
      border-radius: 1rem;
      background-image: url(${props => props.imgActive});
      background-size:cover;
      background-position: center center;
      background-repeat: no-repeat;
    }


  @media (min-width: 1024px){
    &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    transition: .1s ease-in;
 
   }
  }
  
  div
  {
    background-color: var(--naranja);
  }

  &:nth-of-type(even){
    animation: formacionD 3s;
  }

  &:nth-of-type(odd){
    animation: formacionI 2s;
  }


  &:hover {
    @media (min-width: 1200px){
      clip-path: ellipse(85% 100% at 60% 86%);
    }

    border: ${props => props.color} 2px solid;
    background-color:rgba(10, 12, 13,0.85);
    
    div {
      background-color:${props => props.color};
    }

    &::before {
      margin-top: -5px;
      background:linear-gradient(160deg, var(--gris) 35%, ${props => props.color} 85%);
      width: 8.7rem;
      height: 5rem;
      
     
    }

    &::after {
      animation: aparecer 1s;
    }

   


  }



  h3 {
    font-weight: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7rem;
    margin: 0 9rem 0 0;
    padding: 1rem;
    line-height: 1.3;
  }
  

  span {
    display: block;
    padding: 0 2rem;
  
  }

  p {
   line-height: 1.6;
   background-color: var(--azul);
   padding: 2rem;
   font-size: 1.4rem;
   font-weight: 100;
   margin: 0;
   height: auto;
   min-height: 120px;
   border-radius: 0 0 8px 8px ;
  }

  i {
    margin-right: 7px;
  }

 
`
const Tiempo=styled.div `
  font-size: 1.3rem;
  display: flex;
  justify-content: space-evenly;
  background-color: var(--naranja);

   &:hover {
      background-color: ${props => props.color};
    }

 
`

function Conocimientos({arrayeducacion}) {

  
  return (
    <div>
        <ListadoEducacion>

          {arrayeducacion.map(educacion=>{
            const {id, titulo, plataforma, descripcion, tiempo, imagen, duracion,color, destacable}= educacion;

            return(

                <Educacion
                  key={id}
                  imgActive={imagen}
                  color={color}
                >
                  <h3 >{titulo}</h3>
                  <Tiempo color={color}>
                    <span> 
                      <i className="bi bi-calendar-event"></i>{tiempo.desde} - {tiempo.hasta}</span>

                    <span>
                    <i className="bi bi-clock-history"></i>
                    {duracion}</span>
                  </Tiempo >

                  <p>{descripcion}</p>
                  <div>
                      <span>{destacable}</span> 
                  </div>
                  
                </Educacion>

            );

          })}

        </ListadoEducacion>

      
    </div>
  )
}

export default Conocimientos
