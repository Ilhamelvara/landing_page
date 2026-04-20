import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactSection.css'

export default function ContactSection({ darkMode }) {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace these with your own EmailJS IDs
    const SERVICE_ID = 'service_wr0hjdz';
    const TEMPLATE_ID = 'template_tvh2hd7';
    const PUBLIC_KEY = 'qZLdCkX4bZRT007OM';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setStatus('success');
        e.target.reset();
        
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      }, (error) => {
        console.log('FAILED...', error.text);
        setStatus('error');
        
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      });
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-title-container">
        <h2 className="contact-title" style={{ color: darkMode ? '#f5f5f0' : '#1a1a2e' }}>
          Contact
        </h2>
        <div className="contact-underline" />
      </div>

      <div className={`contact-card ${darkMode ? 'dark' : ''}`}>
        <p className="contact-description">
          Have a project in mind, an opportunity, or just want to say hi? Feel free to reach out!
        </p>

        {status === 'success' && (
          <div className="contact-notification success">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Message sent successfully!
          </div>
        )}

        {status === 'error' && (
          <div className="contact-notification error">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            Failed to send message. Please try again.
          </div>
        )}

        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="John Doe" required disabled={status === 'sending'} />
          </div>
          
          <div className="contact-form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" required disabled={status === 'sending'} />
          </div>
          
          <div className="contact-form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows={5} placeholder="Hello, I'd like to talk about..." required disabled={status === 'sending'} />
          </div>
          
          <button type="submit" className={`contact-submit-btn ${status === 'sending' ? 'loading' : ''}`} disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="contact-email-direct">
          <p>Or email me directly at:</p>
          <a href="mailto:muhh.ilham20@gmail.com" className="direct-email-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            muhh.ilham20@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
