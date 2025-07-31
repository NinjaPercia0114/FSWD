import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EventDemo from './components/EventDemo.jsx'
import Counter from './components/Counter.jsx'
// import About from './about.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
  </StrictMode>,
)
