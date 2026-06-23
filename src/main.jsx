import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Self-hosted fonts (see index.html for the Google Fonts fallback note).
// Variable families register as "Space Grotesk Variable" / "Inter Variable".
import '@fontsource-variable/space-grotesk'
import '@fontsource-variable/inter'
import '@fontsource/ibm-plex-sans-arabic/400.css'
import '@fontsource/ibm-plex-sans-arabic/600.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
