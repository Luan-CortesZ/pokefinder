import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../assets/fonts/PokemonSolidNormal-xyWR.ttf';
import './views/styles/index.scss'
import App from './views/App.tsx'
import { AuthProvider } from '../components/AuthContext/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
       <App />
    </AuthProvider>
  </StrictMode>,
)
