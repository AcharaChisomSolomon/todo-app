import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Global } from '@emotion/react'
import { globalStyles } from './globalStyles'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Global styles={globalStyles} />
    <App />
  </StrictMode>,
)
