import { NavLink, Outlet, useLocation} from 'react-router-dom'
 import { useState, useEffect } from 'react'

 import '/src/spinner.css';

// foto
import fotoPersonal from '/webp/fotoPersonal.webp'

import styled from '@emotion/styled'
import logo from'/webp/logo/2.webp'
import svg from'/webp/path.svg'

// objeto.js
import {arrayRedesSociales} from '../js/RedesSociales'

const HeaderP= styled.header `
background-image: linear-gradient(to bottom, #00000077 1%,  #0000008a 100%), url('/webp/header.webp');
background-position:center center;
background-size: cover;
height: 40rem;


@media (min-width: 768px){
  height: 40rem;
}
`
const Flex=styled.div `
  margin: 0 auto;
 

  @media (min-width:768px ){
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

`
const FotoPersonal=styled.img `
  display:none;
  max-height: 30rem;
  border-radius: 50%;

  @media (min-width: 768px){
     display: block;
     animation: habilidad 2s ease-in-out ;
  }
`

const Logo= styled.img `
  margin: 0 auto;
 width: 35rem;
 height: 35rem;

 @media (min-width: 768px){
    width: 40rem;
    height: 40rem;
 }
`
const Footer= styled.footer `
  display: flex;
  width: 30rem;
  margin: 0 auto;
  justify-content: space-between;
  padding: 2rem 0;

  img {
    border-radius: 100%;
    height: 5rem;
  }
`
const Main=styled.main `
  width: 95%;
  max-width: 120rem;
  margin: 0 auto;
  color: var(--blanco);
 
`
const Wage=styled.img `
 background-color: transparent;
`


function Layout() {
  const location= useLocation();
  const rutaActual=location.pathname;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular un tiempo de carga de 2 segundos
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading && rutaActual==='/') {
    return (
     <div className='spinner'>
      <span className="loader2"></span>
     </div>
      );
  }
  else if (isLoading && rutaActual!=='/'){
   return(
    <div 
    className='spinner'>
      <span className="loader"></span>
  </div>

   )
  }

 
  return (
    <>


     {rutaActual==='/' ?
      <HeaderP>
        <Flex>
          <NavLink>
            <Logo src={logo}/>
          </NavLink>
          <FotoPersonal src={fotoPersonal}/>
          
        </Flex>
        <Wage src={svg}/>
      </HeaderP>

      :
      
      <NavLink>
        <Logo src={logo}/>
      </NavLink>

    
    }
      
      <Main>
        <Outlet/>
      </Main>
      

      <Footer>  {/*redes sociales */}
    
        {arrayRedesSociales.map((redSocial, indice)=>{
          const { img, href, nombre}= redSocial;

          return (
            <a 
              loading='lazy'
              key={indice}  
              href={href} 
              target='_blank'>

            <img 
              height='50px'
              width='50px'
              src={img}
              alt={`imagen de ${nombre}`}/>
            </a>
        )})}


      
      </Footer>
    </>
  )
}

export default Layout


   






  
