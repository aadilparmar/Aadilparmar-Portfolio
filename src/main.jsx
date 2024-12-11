import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Sections/Navbar.jsx'
import Hero from './Sections/Hero'
import About from './Sections/About.jsx'
import Projects from './Sections/Projects.jsx'
import Clients from './Sections/Clients.jsx'
import Contact from './Sections/Contact.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
  </StrictMode>
)
