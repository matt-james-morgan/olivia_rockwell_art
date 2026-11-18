import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { getWebInstrumentations, initializeFaro } from '@grafana/faro-web-sdk'
import './index.css'
import App from './App.tsx'

// Grafana Frontend Observability: reports JS errors and page speed from real visitors.
// Live domain only, so local dev and Vercel previews don't add noise.
if (location.hostname.endsWith('orockwell-fineart.com')) {
  initializeFaro({
    url: 'https://faro-collector-prod-ca-east-0.grafana.net/collect/9deaf039bff471f2f95a55d2ec27df28',
    app: { name: 'olivia-rockwell-art', environment: 'production' },
    instrumentations: [...getWebInstrumentations()],
  })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
