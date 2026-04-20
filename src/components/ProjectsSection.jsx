import { useState } from 'react'
import './ProjectsSection.css'

export default function ProjectsSection({ darkMode }) {
  const [activeTabs, setActiveTabs] = useState({
    "ResQNet": "learned",
    "Elvara Shop": "learned",
    "BencanaMap": "learned",
    "ChatRoom Admin": "learned"
  });

  const setTab = (projectName, tab) => {
    setActiveTabs(prev => ({ ...prev, [projectName]: tab }));
  };

  const projects = [
    {
      name: "ResQNet",
      description: "A custom full-stack disaster management & relief platform built to streamline online reporting and campaign management. The platform features real-time maps, campaign tracking, and comprehensive administrative dashboards to monitor operations.",
      tech: [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invertDark: true },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', invertDark: true },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'},
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'}
      ],
      learned: [
        "How to integrate interactive maps using Leaflet to securely handle location data.",
        "Managing complex relational databases and migrations using Prisma.",
        "Building advanced administrative dashboards that transform raw data into actionable insights."
      ],
      challenges: [
        "Ensuring data consistency across real-time interactions.",
        "Handling multi-step forms and state management efficiently."
      ],
      link: "https://capstone-resqnet.vercel.app/",
      role: "Professional | March 2026 - Present",
      image: "public/resqnet.png"
    },
    {
      name: "Elvara Shop",
      description: "Premium e-commerce UI with a modern glassmorphism aesthetic. Features a purely CSS-driven interactive shopping cart design without relying on JavaScript logic for basic state handling.",
      tech: [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' }
      ],
      learned: [
        "Advanced CSS techniques like the 'checkbox hack' for component state.",
        "Crafting high-end UI components with glassmorphism and modern typography.",
        "Optimizing frontend performance natively."
      ],
      challenges: [
        "Achieving consistent blur and accessibility contrast across different browsers."
      ],
      link: "https://ilhamelvara.github.io/onlinebooststrap/",
      role: "Personal Project | Mar 2026 - Present",
      image: "public/elvara.png"
    },
    {
      name: "Bikenjoy",
      description: "A disaster visualization tool that displays real-time disaster reports on an interactive map. Focuses on minimal design and efficient data representation.",
      tech: [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      ],
      learned: [
        "Implementing real-time data fetching for map markers.",
        "Customizing map icon aesthetics for better UX."
      ],
      challenges: [
        "Performance optimization for rendering many markers."
      ],
      link: "https://gojirated.github.io/bikenjoy/",
      role: "Team Project | 2026",
      image: "public/bikenjoy.png"
    }
  ];

  return (
    <div className="projects-page-wrapper">
      <div className="projects-title-container">
        <h2 className="projects-title" style={{ color: darkMode ? '#f5f5f0' : '#1a1a2e' }}>
          Projects
        </h2>
        <div className="projects-underline" />
      </div>

      <div className="projects-list">
        {projects.map((project) => {
          const currentTab = activeTabs[project.name] || 'learned';
          const tabContent = currentTab === 'learned' ? project.learned : project.challenges;

          return (
            <div key={project.name} className="project-card-desktop">
              <div className="project-info">
                <h3 className="project-title">{project.name}</h3>
                
                <div className="project-tech">
                  {project.tech.map(t => (
                    <img 
                      key={t.name} 
                      src={t.icon} 
                      alt={t.name} 
                      title={t.name}
                      className={`project-tech-icon ${t.invertDark && darkMode ? 'invert-dark' : ''}`}
                      onError={e => e.target.style.display = 'none'}
                    />
                  ))}
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="project-tabs-container">
                  <div className="project-tabs-header">
                    <button 
                      className={`project-tab-btn ${currentTab === 'learned' ? 'active' : ''}`}
                      onClick={() => setTab(project.name, 'learned')}
                    >
                      What I Learned
                    </button>
                    <button 
                      className={`project-tab-btn ${currentTab === 'challenges' ? 'active' : ''}`}
                      onClick={() => setTab(project.name, 'challenges')}
                    >
                      Challenges
                    </button>
                  </div>
                  <div className="project-tab-content">
                    <ul>
                      {tabContent.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="project-visual">
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.name} className="project-image" />
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '1rem' }}>
                  <a 
                    href={project.link} 
                    className="project-visit-btn" 
                    target={project.link === '#' ? '_self' : '_blank'} 
                    rel={project.link === '#' ? '' : 'noopener noreferrer'}
                  >
                    Visit 
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                  <div className="project-meta">
                    {project.role}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
