import React from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/cormorant-garamond/latin-300.css'
import '@fontsource/cormorant-garamond/latin-400.css'
import '@fontsource/cormorant-garamond/latin-500.css'
import '@fontsource/cormorant-garamond/latin-400-italic.css'
import '@fontsource/barlow-semi-condensed/latin-300.css'
import '@fontsource/barlow-semi-condensed/latin-400.css'
import '@fontsource/barlow-semi-condensed/latin-500.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
