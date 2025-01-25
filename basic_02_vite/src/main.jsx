import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Color from './Color.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Color/>
  </StrictMode>,
)
