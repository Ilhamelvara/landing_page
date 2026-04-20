import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer dark">
      <div className="footer-content">
        <div className="footer-logo">Ilham Putra</div>
        <p className="footer-copyright">
          &copy; {currentYear} All rights reserved. Designed & Built with ❤️
        </p>
        <div className="footer-social">
          <a href="https://github.com/Ilhamelvara" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ilham-putra-96a6823a2/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:muhh.ilham20@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
