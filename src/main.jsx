import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greeting from './Greeting.jsx'
import TodoList from './JsInJSX.jsx'

import GreetingImage from './GreetingImage.jsx'
import { Button1,Button2 } from './Buttons.jsx'
import TestJSX from './JSXcomponent.jsx'
import Bio from './JSXchallenge.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting/>
  </StrictMode>,
)
