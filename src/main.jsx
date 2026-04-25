import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greeting from './Greeting.jsx'
import TodoList from './JsInJSX.jsx'

import GreetingImage from './GreetingImage.jsx'
import { Button1,Button2 } from './Buttons.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting/>
    <TodoList/>
    <GreetingImage/>
    <Button1></Button1>
    <Button2></Button2>
  </StrictMode>,
)
