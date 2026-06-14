import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  RatingProvider } from './RatingContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
<RatingProvider>
    <App /></RatingProvider>
  // </StrictMode>,
)
