import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
