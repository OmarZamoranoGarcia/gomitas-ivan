import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//https://superdesign.dev/preview/draft/9828e8f3-8814-494b-a4d5-5fa4b10885ae