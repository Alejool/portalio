
// styled components
import styled from '@emotion/styled';

/** js y componentes */
import Tarjetas from '../components/Tarjetas'
import { arrayTarjetas} from '../js/Tarjetas.js';
import { NavLink } from 'react-router-dom';


/**fotos */
import cv from '/webp/fotoPersonal.webp'


const Main=styled.main `
padding: 5rem 0;
color: var(--blanco);
margin: 0 auto;
max-width: 120rem;
width: 90%;
text-align: justify;
margin-bottom: 7rem;

@media (min-width: 1048px){
 display: grid;
 grid-template-columns: 35% 65%;
 column-gap: 3rem;
 align-items: center;

}
`

const Info=styled.div `
  animation: opacidad 2s ease-in;

  h2 {
  text-align: center;
  }
  
`
const Cv=styled.div `
  

  @media (min-width: 768px){
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  a 
  {
    padding: .6rem 7rem;
    background-color: var(--azul);
    border-radius: 1rem;
    display: block;
    text-align: center;
    font-size: 1.7rem;
    color: var(--blanco);
    cursor: pointer;
    margin-bottom: 4rem;

  @media (min-width: 768px){
    display:inline-block ;
     
  }
  @media (min-width: 1050px){
    width: 100%;
    margin-bottom: 0;
  }
  }
  
`



function Index() {

  
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = cv; // Reemplaza con la ruta correcta de tu CV
      link.download = 'cv_alejandro.pdf'; // Nombre de archivo que se descargará
      link.click();
    };
  return (
    <div>
      
      <Main>
     
       <Info>
       <h2>¿Quién soy?</h2>
        <p>¡Hola! Soy Luis Alejandro Olarte, un apasionado desarrollador web front-end en busca de una emocionante oportunidad para iniciar mi carrera en el mundo real y aplicar mis habilidades y conocimientos entre los cuales destaca el trabajo en equipo.
        </p>
       
        <p>
        Soy una persona altamente motivada y comprometida con mi trabajo. Me apasiona el aprendizaje continuo y siempre estoy en busca de nuevos desafíos. Me encantaría tener la oportunidad de contribuir a tu empresa con mis habilidades y conocimientos, mientras sigo creciendo como desarrollador web. ¡Gracias por considerar mi trabajo!
        </p>

        <Cv>
          <a onClick={handleDownload}>
            Descargar CV <i className="bi bi-arrow-down-short"></i>
          </a>
        </Cv>

       
       </Info>

       <Tarjetas
        tarjetas={arrayTarjetas}
       />

       <NavLink/>


      </Main>

     

    </div>
  )
}

export default Index

