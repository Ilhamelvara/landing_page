import { useState, useEffect } from 'react'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import AboutMeSection from './components/AboutMeSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const NAV_LINKS = ['Home', 'Skills', 'Projects', 'About Me', 'Contact']

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) document.body.classList.add('dark')
    else document.body.classList.remove('dark')
  }, [darkMode])

  // Scroll to top when switching pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [currentPage])

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <div 
          className="navbar-logo" 
          onClick={() => setCurrentPage('home')}
          title="Go to Home"
        >
          Ilham Putra
        </div>
        <ul className="navbar-links">
          {NAV_LINKS.map(link => {
            const sectionId = link.toLowerCase().replace(' ', '-');
            const isActive = currentPage === sectionId;
            return (
              <li key={link}>
                <a 
                  href={`#${sectionId}`} 
                  className={isActive ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(sectionId);
                  }}
                >
                  {link}
                </a>
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

      {/* ── MAIN CONTENT (SINGLE STANDALONE VIEW) ── */}
      <main className="main-content-wrapper">
        {currentPage === 'home' && (
          <div className="home-page-container">
            <section id="home" className="hero-section page-fade-in">
              {/* Background image */}
              <img
                src="hero.png"
                alt="Developer workspace"
                className="hero-img"
              />

              {/* Gradient overlay so text is readable */}
              <div className="hero-overlay" />

              {/* Hero content */}
              <div className="hero-content">
                <p className="hero-greeting">Hello, I'm</p>
                <h1 className="hero-name">Mochammad Ilham Putra Irawan</h1>
                <p className="hero-role">Web Developer</p>
                
                <p className="hero-description">
                  Saya adalah seorang web Developer yang berfokus pada pembuatan website interaktif yang modern, responsif, dan berestetika tinggi. Senang mengubah baris kode menjadi visual yang menakjubkan bagi pengguna.
                </p>

                {/* Quick Social Links */}
                <div className="hero-socials">
                  <a href="https://github.com/Ilhamelvara" target="_blank" rel="noopener noreferrer" className="hero-social-icon" title="GitHub Profile">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/ilham-putra-96a6823a2/" target="_blank" rel="noopener noreferrer" className="hero-social-icon" title="LinkedIn Profile">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    <span>LinkedIn</span>
                  </a>
                  <a href="mailto:muhh.ilham20@gmail.com" className="hero-social-icon" title="Email Direct">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span>Email</span>
                  </a>
                </div>

                <div className="hero-badges">
                  <span className="hero-badge">HTML5</span>
                  <span className="hero-badge">CSS3</span>
                  <span className="hero-badge">JavaScript</span>
                  <span className="hero-badge">Tailwind CSS</span>
                  <span className="hero-badge">React</span>
                  <span className="hero-badge">Next.js</span>
                  <span className="hero-badge">Node.js</span>
                  <span className="hero-badge">Bootstrap</span>
                </div>
                
                <div className="hero-actions">
                  <button 
                    className="hero-btn hero-btn--primary" 
                    onClick={() => setCurrentPage('about-me')}
                  >
                    About Me
                  </button>
                  <button 
                    className="hero-btn hero-btn--ghost"
                    onClick={() => setCurrentPage('projects')}
                  >
                    View Projects
                  </button>
                </div>
              </div>

              {/* Premium Stats Grid at the right side or bottom */}
              <div className="hero-stats-panel">
                <div className="hero-stat-card">
                  <div className="hero-stat-icon">🚀</div>
                  <div className="hero-stat-info">
                    <span className="hero-stat-num">15+</span>
                    <span className="hero-stat-txt">Modern Tech Skills</span>
                  </div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-icon">💻</div>
                  <div className="hero-stat-info">
                    <span className="hero-stat-num">5+</span>
                    <span className="hero-stat-txt">Interactive Projects</span>
                  </div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-icon">⚡</div>
                  <div className="hero-stat-info">
                    <span className="hero-stat-num">24/7</span>
                    <span className="hero-stat-txt">Fast & Agile Learner</span>
                  </div>
                </div>
              </div>

              {/* Scroll down arrow to transition to the Skills page */}
              <button className="scroll-down-btn" onClick={() => {
                const element = document.querySelector('.home-extra-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
                <span>More</span>
              </button>
            </section>

            {/* ── NEW ADDITIONAL CONTENT BELOW THE HERO ── */}
            <section className="home-extra-section">
              <div className="home-extra-content">
                <div className="home-extra-header">
                  <h2 className="home-extra-title">Layanan & Filosofi Kerja</h2>
                  <div className="home-extra-underline" />
                  <p className="home-extra-subtitle">
                    Berkomitmen untuk menyajikan performa tinggi, aksesibilitas penuh, dan keindahan estetika digital.
                  </p>
                </div>

                <div className="home-services-grid">
                  <div className="service-card">
                    <div className="service-icon">🎨</div>
                    <h3 className="service-title">UI/UX & Aesthetics</h3>
                    <p className="service-desc">
                      Membuat visual antarmuka web yang modern, kaya estetika, dan responsif. Memperhatikan detail micro-interaction dan gradien warna yang harmoni agar memanjakan mata pengguna.
                    </p>
                  </div>

                  <div className="service-card">
                    <div className="service-icon">💻</div>
                    <h3 className="service-title">Modern Web Development</h3>
                    <p className="service-desc">
                      Membangun arsitektur website dengan performa tinggi menggunakan React, Next.js, dan Tailwind CSS. Menjamin baris kode bersih, terstruktur, dan mudah dipelihara jangka panjang.
                    </p>
                  </div>

                  <div className="service-card">
                    <div className="service-icon">⚡</div>
                    <h3 className="service-title">Optimization & Speed</h3>
                    <p className="service-desc">
                      Fokus pada kecepatan loading web yang instan, struktur aksesibilitas yang ramah pengguna, optimasi SEO organik, serta responsivitas adaptif penuh di semua ukuran layar.
                    </p>
                  </div>
                </div>

                {/* Call to Action Banner */}
                <div className="home-cta-banner">
                  <div className="cta-banner-overlay" />
                  <div className="cta-banner-content">
                    <h3>Punya Ide Project Digital Luar Biasa?</h3>
                    <p>Mari berkolaborasi untuk mewujudkan ide kreatif Anda menjadi website fungsional berkelas dunia!</p>
                    <button className="cta-banner-btn" onClick={() => setCurrentPage('contact')}>
                      Hubungi Saya Sekarang
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'skills' && (
          <section id="skills" className="page-section page-fade-in standalone-page">
            <SkillsSection darkMode={darkMode} />
          </section>
        )}

        {currentPage === 'projects' && (
          <section id="projects" className="page-section page-fade-in standalone-page">
            <ProjectsSection darkMode={darkMode} />
          </section>
        )}

        {currentPage === 'about-me' && (
          <section id="about-me" className="page-section page-fade-in standalone-page">
            <AboutMeSection darkMode={darkMode} />
          </section>
        )}

        {currentPage === 'contact' && (
          <section id="contact" className="page-section page-fade-in standalone-page">
            <ContactSection darkMode={darkMode} />
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}


