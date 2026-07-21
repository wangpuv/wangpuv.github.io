import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'
import { LanguageProvider } from './i18n/LanguageContext'
import './styles/global.css'

export function render(url, lang) {
  return renderToString(
    <LanguageProvider initialLang={lang}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </LanguageProvider>,
  )
}
