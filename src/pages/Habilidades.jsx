import React from 'react'
import styled from '@emotion/styled'


//pages
import HabilidadesBlandas from '../components/HabilidadesBlandas'
import Tecnologia from '../components/Tecnologia'

// objeto





const Title= styled.h2 `
  font-size: 4rem;
  color: var(--blanco);
  text-align: center;
  font-weight: bold;

  &:nth-of-type(2){
    margin-top: 5rem;
  }
`



function Habilidades() {  
  return (
    <>
     <Title>Habilidades Técnicas</Title>

      <Tecnologia
      />    

      <Title>Habilidades Blandas</Title>

      <HabilidadesBlandas/>

   

     
    </>
  )
}

export default Habilidades
