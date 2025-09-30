import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ResponsivePreview from './components/ResponsivePreview/ResponsivePreview.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResponsivePreview>
      <App />
    </ResponsivePreview>
  </StrictMode>,
)