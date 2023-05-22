import React from 'react'
import { useState } from 'react'




//
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
  text-align: center;
  margin-bottom: 2rem;
  transition: transform .5s ease-in-out;
  transition: background-color .5s ease-in;
  max-width:55rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  border:var(--beige) 1px solid;
  clip-path: ellipse(90% 100% at 60% 85%);
  box-shadow: 0px 5px 11px -7px var(--blanco);

  div {
      background-color: var(--naranja);
    }

 
  
  
  
  &:nth-of-type(even){
    animation: formacionD 3s ;
  }
  &:nth-of-type(odd){
    animation: formacionI 2s ;
   
  }
 
  @media (min-width: 768px){

    margin: 0;
  }

  &:hover {
    background-color:rgba(10, 18, 13,0.85);
    clip-path: none;

    div {
      background-color: var(--rojo);
    }

    &::after {
      animation: rotateAnimation 1s ;
      position: absolute;
      content: '';
      display: block;
      width: 8.7rem;
      height:8.7rem;
      top:0;
      right: 0;
      background-image: url(${props => props.imgActive});
      background-size:cover;
      background-position: center center;
      background-repeat: no-repeat;
      
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
   text-align: justify;
   line-height: 1.3;
   background-color: var(--azul);
   padding: 2rem;
   font-size: 1.4rem;
   margin: 0;
   height: auto;
   min-height: 133px;
   
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
            const {id, titulo, plataforma, descripcion, tiempo, imagen, duracion,color}= educacion;

            return(

                <Educacion
                  key={id}
                  imgActive={imagen}
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
                  
                </Educacion>

            );

          })}

        </ListadoEducacion>

      
    </div>
  )
}

export default Conocimientos
