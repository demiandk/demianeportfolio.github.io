import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import EPortfolio from './components/EPortfolio.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <br />
    <EPortfolio />
  </StrictMode>,
)
