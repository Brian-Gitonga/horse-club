import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header.tsx'
import Hero from './components/hero.tsx'
import AboutSection from './components/about-section.tsx'
import ServiceSection from './components/service-section.tsx'
import Reasons from './components/reasons.tsx'
import Team from './components/team.tsx'
import Blog from './components/blog.tsx'
import Footer from './components/footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <Header />
    <Hero />
    <AboutSection />
    <ServiceSection />
    <Reasons />
    <Team />
    <Blog />
    <Footer />
  </StrictMode>,
)
