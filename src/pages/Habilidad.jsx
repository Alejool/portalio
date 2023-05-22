import React from 'react'
import {  useParams } from 'react-router-dom'
import { buscarHabilidad } from '../js/Acciones';

// styled
import styled from '@emotion/styled';



// styled comoponents

const HabilidadMostrar= styled.div `
  color: var(--blanco);
  margin-bottom: 10rem;
 
`

const Icono=styled.img `
    max-width: 20rem;
    margin: 0 auto;

    animation: fade-in .7s;
   
    
  
`


const Seccion=styled.div `
  border-radius: .3rem;
  max-width: 60rem;
  margin: 0 auto;
  margin-top: 2rem;
  padding: .5rem 3rem;
  box-shadow: 1px -1px 16px -7px rgba(0,0,0,0.75);
  opacity: .65;
  animation: habilidad 1s ease-in-out ;
 
  h3
  {
    font-size: 2.5rem;
    text-align: center;
    color:  var(--gris);
  }
  img{
    max-width: 23rem;
    margin: 0 auto;
    
  }
  

`

const Evidencias=styled.div `
padding: 2rem 0;
border-bottom: 1px var(--blanco) solid;
  @media (min-width: 528px){
    border: none;
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: 55% 40%;
  }
  margin-bottom: 1rem;
  

  p {
    text-align: center;
    font-size: 1.6rem;

    @media (min-width: 768px){
       text-align: justify;
    }
  }
`

const Noexiste=styled.div `

  h3{
    font-size: 4rem;
    color: var(--blanco);
  }

`

export default function Habilidad() {


  const {id}=useParams();
  const habilidad=buscarHabilidad(id)
  

  
  return (
    <>
      {habilidad.length>0 ?
        habilidad.map(habilidadMostrar =>{

          const {id,nombre, img, color, evidencia}= habilidadMostrar


          return (
          <HabilidadMostrar key={id} >
            
            <Icono src={img}></Icono>

            <Seccion style={{backgroundColor:color}}>

              <h3>Uso en mis proyectos</h3>
              
              
              {evidencia.map((evidenciaImg, index)=>{
                const{ruta, texto}=evidenciaImg;

                return(
                  <Evidencias 
                    key={index}>
                      <p>{texto}</p>
                    <img src={ruta}/>
                  </Evidencias>
                )
               
              })}

            </Seccion>
         
          </HabilidadMostrar>

          )
        

        })
       
        :
        <Noexiste>
          <h3 >No existe esta habilidad</h3>
        </Noexiste>
       }
        
        
    </>
  )
}
