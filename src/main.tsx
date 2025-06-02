import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './router'
import './scss/app.scss';

createRoot(document.getElementById('root')!).render(
 /*  <StrictMode>
    
  </StrictMode>, */
  <AppRouter />
)
