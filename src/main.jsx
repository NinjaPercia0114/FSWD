import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EventDemo from './components/EventDemo.jsx'
import Counter from './components/Counter.jsx'
import Counter2 from './components/Counter2.jsx'
import HookDemo from './components/HookDemo.jsx'
import Sumdemo3 from './components/Sumdemo3.jsx'
// import About from './about.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sumdemo3 />
  </StrictMode>,
)
