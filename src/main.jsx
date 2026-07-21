import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext'
import './styles/global.css'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
)

if (root.childElementCount > 0) hydrateRoot(root, app)
else createRoot(root).render(app)
