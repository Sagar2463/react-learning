import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Color from './Color.jsx'
import React from 'react'


// we can create our own react element 
const Reactelement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target:"_blank"
  },
  "Google"
)

createRoot(document.getElementById('root')).render(
<>
    <App />
    <Color/>
    {Reactelement}
  
  </>
)