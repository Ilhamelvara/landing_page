import { useState, useEffect } from 'react'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import AboutMeSection from './components/AboutMeSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const NAV_LINKS = ['Skills', 'Projects', 'About Me', 'Contact']

export default function App() {
  const [activeSection, setActiveSection] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) document.body.classList.add('dark')
    else document.body.classList.remove('dark')
  }, [darkMode])

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <div className="navbar-logo">lham Putra</div>
        <ul className="navbar-links">
          {NAV_LINKS.map(link => {
            const hrefTarget = `#${link.toLowerCase().replace(' ', '-')}`;
            return (
              <li key={link}>
                <a href={hrefTarget}>{link}</a>
              </li>
            );
          })}
        </ul>
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(d => !d)}
          aria-label="Toggle dark mode"
          title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>

      {/* ── HERO IMAGE SECTION ── */}
      <section className="hero-section">
        {/* Background image */}
        <img
          src="/hero.png"
          alt="Developer workspace"
          className="hero-img"
        />

        {/* Gradient overlay so text is readable */}
        <div className="hero-overlay" />

        {/* Hero content */}
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Mochammad Ilham Putra Irawan</h1>
          <p className="hero-role">Front End Developer</p>
          <div className="hero-badges">
            <span className="hero-badge">HTML</span>
            <span className="hero-badge">CSS</span>
            <span className="hero-badge">JavaScript</span>
            <span className="hero-badge">Tailwind CSS</span>
            <span className="hero-badge">React</span>
            <span className="hero-badge">Next.js</span>
            <span className="hero-badge">Node.js</span>
            <span className="hero-badge">GitHub</span>
            
          </div>
          <div className="hero-actions">
            <button className="hero-btn hero-btn--primary" onClick={() => setActiveSection('About Me')}>
              About Me
            </button>
            <a href="#projects" className="hero-btn hero-btn--ghost" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              View Projects
            </a>
          </div>
        </div>

        {/* Scroll down arrow */}
        <a className="scroll-down" href="#skills">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
          <span>scroll</span>
        </a>
      </section>

      {/* ── SKILLS SECTION ── */}
      <section id="skills" className="page-section">
        <SkillsSection darkMode={darkMode} />
      </section>

      {/* ── PROJECTS SECTION ── */}
      <section id="projects" className="page-section">
        <ProjectsSection darkMode={darkMode} />
      </section>

      {/* ── ABOUT ME SECTION ── */}
      <section id="about-me" className="page-section">
        <AboutMeSection darkMode={darkMode} />
      </section>

      {/* ── CONTACT SECTION ── */}
      <section id="contact" className="page-section">
        <ContactSection darkMode={darkMode} />
      </section>

      <Footer />
    </>
  )
}
