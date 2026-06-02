import './CertificatesSection.css'

export default function CertificatesSection({ darkMode }) {
  const certificates = [
    {
      title: "Dicoding Academy Certificate (1)",
      issuer: "Dicoding Academy",
      file: "/Certificate - CFS188D6Y601 (1).pdf",
      description: "Sertifikat keahlian dan kompetensi resmi yang diterbitkan oleh Dicoding Academy untuk pemrograman web / teknologi informasi.",
      type: "Certificate"
    },
    {
      title: "Best Capstone Team",
      issuer: "Dicoding Academy",
      file: "/Certificate - CFS188D6Y601 (2).pdf",
      description: "Sertifikat kelulusan kelas pemrograman tingkat lanjut dari Dicoding Academy untuk memvalidasi pemahaman dan penerapan teknologi modern.",
      type: "Certificate"
    },
    {
      title: "Surat Keterangan Lulus (Graduation Letter)",
      issuer: "Dicoding Academy",
      file: "/Graduation Letter - CFS188D6Y601.pdf",
      description: "Surat Keterangan Kelulusan resmi dari Dicoding Academy yang menyatakan kelulusan dalam studi Pemrograman Web Tingkat Lanjut.",
      type: "Graduation"
    }
  ];

  return (
    <div className="certificates-page-wrapper">
      <div className="certificates-title-container">
        <h2 className="certificates-title" style={{ color: darkMode ? '#f5f5f0' : '#1a1a2e' }}>
          Certificates
        </h2>
        <div className="certificates-underline" />
      </div>

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={index} className={`cert-card ${darkMode ? 'dark' : ''}`}>
            <div>
              <div className="cert-icon-wrapper">
                {cert.type === 'Certificate' ? (
                  /* Award Badge Icon */
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cert-svg-icon">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                ) : (
                  /* Graduation Cap Icon */
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cert-svg-icon">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                )}
              </div>

              <div className="cert-info">
                <span className="cert-type-badge">{cert.type}</span>
                <h3 className="cert-card-title">{cert.title}</h3>
                <p className="cert-issuer">Issued by: <strong>{cert.issuer}</strong></p>
                {cert.id && <p className="cert-id">Credential ID: <code>{cert.id}</code></p>}
                <p className="cert-desc">{cert.description}</p>
              </div>
            </div>

            <div className="cert-actions">
              <a href={cert.file} target="_blank" rel="noopener noreferrer" className="cert-btn secondary">
                View PDF
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
              <a href={cert.file} download className="cert-btn primary">
                Download
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
