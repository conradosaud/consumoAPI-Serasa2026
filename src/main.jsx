import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Pokedex from './Pokedex.jsx'
import Teste from './Teste.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Teste/>
  </StrictMode>,
)
