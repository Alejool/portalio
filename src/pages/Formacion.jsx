import React from 'react'
import styled from '@emotion/styled'

// conocmientos
import {arrayeducacion} from '../js/Conocimientos'

const Title=styled.h2 `
  font-size: 3rem;

  &::after {
    content: '';
    display: block;
    width: 15rem;
    background-color: var(--beige);
    height: .3rem;
    margin: 0 auto;
    border-radius:4rem;
  }
`



export default function Formacion() {
  return (
    <div>
      <Title>Formación acádemica</Title>
      <Conocimientos arrayeducacion={arrayeducacion}/>


    </div>
  )
}
