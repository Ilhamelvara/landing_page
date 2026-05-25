import { useState } from 'react'
import './ProjectsSection.css'

const POPULAR_TECH = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invertDark: true },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', invertDark: true },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Github', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
];

export default function ProjectsSection({ darkMode }) {
  const [activeTabs, setActiveTabs] = useState({
    "ResQNet": "learned",
    "Elvara Shop": "learned",
    "BencanaMap": "learned",
    "ChatRoom Admin": "learned"
  });

  // State for the two customizable slots loaded from localStorage
  const [slot1, setSlot1] = useState(() => {
    const saved = localStorage.getItem('portfolio_project_slot1');
    return saved ? JSON.parse(saved) : null;
  });
  
  const [slot2, setSlot2] = useState(() => {
    const saved = localStorage.getItem('portfolio_project_slot2');
    return saved ? JSON.parse(saved) : null;
  });

  // Modal and Form States
  const [modalOpen, setModalOpen] = useState(false);
  const [editingSlot, setEditingSlot] = useState(null); // 'slot1' or 'slot2'
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    tech: [],
    customTech: '',
    learned: ['', '', ''],
    challenges: ['', ''],
    link: '',
    role: '',
    image: 'gradient-sunset'
  });

  const setTab = (projectName, tab) => {
    setActiveTabs(prev => ({ ...prev, [projectName]: tab }));
  };

  const defaultProjects = [
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
      image: "resqnet.png"
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
      image: "elvara.png"
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
      image: "bikenjoy.png"
    }
  ];

  // Open modal and pre-fill form
  const openForm = (slotName, currentData) => {
    setEditingSlot(slotName);
    if (currentData) {
      setFormValues({
        name: currentData.name || '',
        description: currentData.description || '',
        tech: (currentData.tech || []).map(t => t.name).filter(n => POPULAR_TECH.some(pt => pt.name === n)),
        customTech: (currentData.tech || []).map(t => t.name).filter(n => !POPULAR_TECH.some(pt => pt.name === n)).join(', '),
        learned: (currentData.learned || []).concat(['', '', '']).slice(0, 3),
        challenges: (currentData.challenges || []).concat(['', '']).slice(0, 2),
        link: currentData.link || '',
        role: currentData.role || '',
        image: currentData.image || 'gradient-sunset'
      });
    } else {
      setFormValues({
        name: '',
        description: '',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        customTech: '',
        learned: ['', '', ''],
        challenges: ['', ''],
        link: '',
        role: '',
        image: 'gradient-sunset'
      });
    }
    setModalOpen(true);
  };

  // Handle form save
  const handleSave = (e) => {
    e.preventDefault();

    const selectedTechObjects = POPULAR_TECH.filter(t => formValues.tech.includes(t.name));

    if (formValues.customTech) {
      formValues.customTech.split(',').forEach(item => {
        const trimmed = item.trim();
        if (trimmed) {
          selectedTechObjects.push({
            name: trimmed,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' // default fallback icon
          });
        }
      });
    }

    const newProject = {
      name: formValues.name.trim() || `New Project Slot`,
      description: formValues.description.trim() || 'A new awesome project in my portfolio.',
      tech: selectedTechObjects,
      learned: formValues.learned.map(l => l.trim()).filter(l => l !== ''),
      challenges: formValues.challenges.map(c => c.trim()).filter(c => c !== ''),
      link: formValues.link.trim() || '#',
      role: formValues.role.trim() || 'Personal Project | 2026',
      image: formValues.image || 'gradient-sunset'
    };

    if (editingSlot === 'slot1') {
      setSlot1(newProject);
      localStorage.setItem('portfolio_project_slot1', JSON.stringify(newProject));
    } else {
      setSlot2(newProject);
      localStorage.setItem('portfolio_project_slot2', JSON.stringify(newProject));
    }

    setModalOpen(false);
  };

  // Clear slot function
  const handleClearSlot = (slotName, e) => {
    e.stopPropagation();
    if (window.confirm('Apakah Anda yakin ingin menghapus project ini dan mengosongkan slot kembali?')) {
      if (slotName === 'slot1') {
        setSlot1(null);
        localStorage.removeItem('portfolio_project_slot1');
      } else {
        setSlot2(null);
        localStorage.removeItem('portfolio_project_slot2');
      }
    }
  };

  const renderProjectCard = (project, isCustom = false, slotName = '') => {
    const currentTab = activeTabs[project.name] || 'learned';
    const tabContent = currentTab === 'learned' ? (project.learned || []) : (project.challenges || []);

    return (
      <div key={project.name} className="project-card-desktop custom-added-card">
        {isCustom && (
          <div className="project-custom-actions">
            <button className="project-action-btn edit" onClick={() => openForm(slotName, project)} title="Edit Project">
              ✏️ Edit
            </button>
            <button className="project-action-btn delete" onClick={(e) => handleClearSlot(slotName, e)} title="Reset Slot">
              🗑️ Reset
            </button>
          </div>
        )}

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
                {tabContent.length > 0 ? (
                  tabContent.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))
                ) : (
                  <li>No entries added yet. Click edit to customize!</li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="project-visual">
          <div className="project-image-wrapper">
            {project.image.startsWith('gradient-') ? (
              <div className={`project-image-gradient ${project.image}`} />
            ) : (
              <img src={project.image} alt={project.name} className="project-image" />
            )}
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
  };

  const renderEmptyCard = (slotName) => {
    return (
      <div 
        key={slotName} 
        className="project-card-empty" 
        onClick={() => openForm(slotName, null)}
      >
        <div className="empty-card-dashed-border">
          <div className="empty-card-content">
            <div className="empty-card-plus-circle">
              <span>+</span>
            </div>
            <h3 className="empty-card-title">Add New Project Slot</h3>
            <p className="empty-card-subtitle">
              Slot {slotName === 'slot1' ? '1' : '2'} Kosong. Klik di sini untuk mengisi details project baru Anda!
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="projects-page-wrapper">
      <div className="projects-title-container">
        <h2 className="projects-title" style={{ color: darkMode ? '#f5f5f0' : '#1a1a2e' }}>
          Projects
        </h2>
        <div className="projects-underline" />
      </div>

      <div className="projects-list">
        {/* Render Default Projects */}
        {defaultProjects.map(project => renderProjectCard(project, false))}

        {/* Render Slot 1 (Custom Project or Empty Card) */}
        {slot1 ? renderProjectCard(slot1, true, 'slot1') : renderEmptyCard('slot1')}

        {/* Render Slot 2 (Custom Project or Empty Card) */}
        {slot2 ? renderProjectCard(slot2, true, 'slot2') : renderEmptyCard('slot2')}
      </div>

      {/* ── MODAL FORM FOR PROJECT DETAIL ── */}
      {modalOpen && (
        <div className="project-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className={`project-modal-card ${darkMode ? 'dark' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={() => setModalOpen(false)}>×</button>
            
            <h2 className="project-modal-title">
              {editingSlot === 'slot1' ? 'Customize Project Slot 1' : 'Customize Project Slot 2'}
            </h2>
            
            <form onSubmit={handleSave} className="project-modal-form">
              <div className="form-row">
                <div className="form-group flex-1">
                  <label>Project Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. My Awesome Startup" 
                    value={formValues.name}
                    onChange={(e) => setFormValues({...formValues, name: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-group flex-1">
                  <label>Role / Date Label</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Personal Project | 2026" 
                    value={formValues.role}
                    onChange={(e) => setFormValues({...formValues, role: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group flex-1">
                  <label>Project Live Link (URL)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. https://myproject.com" 
                    value={formValues.link}
                    onChange={(e) => setFormValues({...formValues, link: e.target.value})}
                  />
                </div>
                
                <div className="form-group flex-1">
                  <label>Visual Header Image / Style</label>
                  <select 
                    value={formValues.image} 
                    onChange={(e) => setFormValues({...formValues, image: e.target.value})}
                  >
                    <option value="gradient-sunset">Sunset Glow Gradient (Premium)</option>
                    <option value="gradient-ocean">Deep Ocean Blue Gradient (Premium)</option>
                    <option value="gradient-forest">Emerald Teal Gradient (Premium)</option>
                    <option value="gradient-fire">Solar Flare Orange Gradient (Premium)</option>
                    <option value="resqnet.png">Use ResQNet Demo Mockup</option>
                    <option value="elvara.png">Use Elvara Shop Demo Mockup</option>
                    <option value="bikenjoy.png">Use Bikenjoy Demo Mockup</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea 
                  rows="3" 
                  placeholder="Enter brief description of the project and its goals..."
                  value={formValues.description}
                  onChange={(e) => setFormValues({...formValues, description: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label>Tech Stack (Popular)</label>
                <div className="tech-checkbox-grid">
                  {POPULAR_TECH.map(pt => (
                    <label key={pt.name} className="tech-checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={formValues.tech.includes(pt.name)}
                        onChange={(e) => {
                          const isChecked = e.target.checked;
                          setFormValues(prev => ({
                            ...prev,
                            tech: isChecked 
                              ? [...prev.tech, pt.name]
                              : prev.tech.filter(name => name !== pt.name)
                          }));
                        }}
                      />
                      <span>{pt.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Custom Tech Stack (Optional - comma separated)</label>
                <input 
                  type="text" 
                  placeholder="e.g. Redis, Express, WebGL" 
                  value={formValues.customTech}
                  onChange={(e) => setFormValues({...formValues, customTech: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>What I Learned (Max 3 items)</label>
                {formValues.learned.map((item, idx) => (
                  <input 
                    key={idx}
                    type="text" 
                    placeholder={`Learning bullet ${idx + 1}`} 
                    value={item}
                    onChange={(e) => {
                      const updated = [...formValues.learned];
                      updated[idx] = e.target.value;
                      setFormValues({...formValues, learned: updated});
                    }}
                    style={{ marginBottom: '0.4rem' }}
                  />
                ))}
              </div>

              <div className="form-group">
                <label>Challenges Met (Max 2 items)</label>
                {formValues.challenges.map((item, idx) => (
                  <input 
                    key={idx}
                    type="text" 
                    placeholder={`Challenge bullet ${idx + 1}`} 
                    value={item}
                    onChange={(e) => {
                      const updated = [...formValues.challenges];
                      updated[idx] = e.target.value;
                      setFormValues({...formValues, challenges: updated});
                    }}
                    style={{ marginBottom: '0.4rem' }}
                  />
                ))}
              </div>

              <div className="form-actions">
                <button type="button" className="btn-cancel" onClick={() => setModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-save">
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

