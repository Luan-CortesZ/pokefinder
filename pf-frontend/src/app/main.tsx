import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../assets/fonts/PokemonSolidNormal-xyWR.ttf';
import './views/styles/index.scss'
import App from './views/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
