import React from 'react'
import ReactDOM from 'react-dom/client'

// router dom
import { RouterProvider } from 'react-router-dom'
//pags
import './index.css'

import { Router } from './router/Router.jsx'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <RouterProvider
     router={Router}>
    </RouterProvider>
  </React.StrictMode>,
)
