export default function SkillsSection({ darkMode }) {
  const skills = [
    { name: 'HTML5',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Prisma',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
    { name: 'TailwindCSS',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Git',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Figma',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Vite',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    { name: 'Bootstrap',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Github',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Vercel',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
  ]

  const dark = darkMode

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      gap: '0.5rem',
    }}>
      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '1.2rem' }}>
        <h2 style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '2rem',
          fontWeight: '700',
          color: dark ? '#f5f5f0' : '#1a1a2e',
          letterSpacing: '-0.02em',
          marginBottom: '0.4rem',
          transition: 'color 0.4s',
        }}>
          Skills
        </h2>
        {/* Orange underline */}
        <div style={{
          width: '56px',
          height: '3px',
          background: 'linear-gradient(90deg, #e85d04, #f4a261)',
          borderRadius: '100px',
          margin: '0 auto',
        }} />
      </div>

      {/* Icons grid */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
        maxWidth: '700px',
      }}>
        {skills.map(skill => (
          <div
            key={skill.name}
            title={skill.name}
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '20px',
              background: dark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.9)',
              border: dark
                ? '1px solid rgba(255,255,255,0.2)'
                : '1px solid rgba(0,0,0,0.07)',
              boxShadow: dark
                ? '0 4px 16px rgba(0,0,0,0.3)'
                : '0 4px 16px rgba(0,0,0,0.08)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              cursor: 'default',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.4s',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.06)'
              e.currentTarget.style.boxShadow = dark
                ? '0 10px 32px rgba(232,93,4,0.25)'
                : '0 10px 32px rgba(232,93,4,0.2)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = dark
                ? '0 4px 16px rgba(0,0,0,0.3)'
                : '0 4px 16px rgba(0,0,0,0.08)'
            }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              width={48}
              height={48}
              style={{
                objectFit: 'contain',
                filter: dark && skill.name === 'Next.js'
                  ? 'invert(1)'
                  : dark && skill.name === 'Express'
                  ? 'invert(1)'
                  : 'none',
              }}
              onError={e => { e.target.style.display = 'none' }}
            />
            <span style={{
              fontSize: '8px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '500',
              color: dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)',
              textAlign: 'center',
              lineHeight: '1.2',
              transition: 'color 0.4s',
            }}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* Currently learning */}
      <p style={{
        marginTop: '1.2rem',
        fontSize: '0.85rem',
        fontFamily: 'Inter, sans-serif',
        color: dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)',
        transition: 'color 0.4s',
      }}>
        Currently learning:{' '}
        <span style={{ color: '#e85d04', fontWeight: '600' }}>Rust</span>
      </p>
    </div>
  )
}
