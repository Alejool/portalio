
import {createBrowserRouter} from 'react-router-dom';

// index
import Index from '../pages/Index'

//pages
import Layout from '../components/Layout';
import Proyectos from '../pages/Proyectos';
import Habilidades from '../pages/Habilidades';
import Contactame from '../pages/Contactame'
import Formacion from '../pages/Formacion'
import Habilidad from '../pages/Habilidad'



const Router = createBrowserRouter([

  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Index/>,
      
      }
      ,
      {
        path:'/portafolio/proyectos',
        element:<Proyectos/>,
        
      },
      {
        path:'/portafolio/formacion',
        element:<Formacion/>,
        
      },
      {
        path:'/portafolio/habilidades',
        element:<Habilidades/>,
        
      },
      {
        path:'/portafolio/contactame',
        element:<Contactame/>,
        
      },
      {
        path:'/portafolio/habilidad/:id',
        element:<Habilidad/>,
        
      },
      
      
      
    ]
  }



])

export {Router}