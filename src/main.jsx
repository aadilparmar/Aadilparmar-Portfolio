import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Sections/Navbar.jsx'
import Hero from './Sections/Hero'
import About from './Sections/About.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Hero/>
    <About/>
  </StrictMode>,
)
