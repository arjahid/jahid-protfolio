import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Router, RouterProvider } from 'react-router-dom'
import './index.css'
import router from './Router/Router.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <RouterProvider router={router} />

   
   
  </StrictMode>,
)
