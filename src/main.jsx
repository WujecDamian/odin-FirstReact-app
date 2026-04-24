import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greeting from './Greeting.jsx'
import GreetingImage from './GreetingImage.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting/>
    <GreetingImage/>
  </StrictMode>,
)
