import React from 'react';
import { Mail, Phone, MapPin, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo" style={{ color: 'white', marginBottom: '1.2rem' }}>
            <Sparkles size={24} style={{ color: '#c5a880' }} />
            Yesería<span style={{ color: '#c5a880' }}>Artística</span>
          </div>
          <p>
            Preservando el arte del modelado y la restauración en yeso con técnicas tradicionales y diseños contemporáneos desde hace más de tres décadas.
          </p>
        </div>

        <div>
          <h4 className="footer-title">Enlaces</h4>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/restauraciones">Restauraciones</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/kits">Kits Artísticos</Link></li>
            <li><Link to="/esculturas">Esculturas</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-title">Contacto</h4>
          <p><MapPin size={18} /> Av. Taller de Arte 1240, CABA</p>
          <p><Phone size={18} /> +54 (11) 4567-8910</p>
          <p><Mail size={18} /> info@yeseriaartistica.com</p>
        </div>

        <div>
          <h4 className="footer-title">Horarios</h4>
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbbab1' }}>
            <Clock size={18} />
            Lunes a Viernes:<br />
            09:00 - 18:00 hs
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbbab1', marginTop: '0.8rem' }}>
            Sábados:<br />
            09:00 - 13:00 hs
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#cbbab1' }} aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#cbbab1' }} aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Yesería Artística. Todos los derechos reservados. Hecho con pasión artesanal.</p>
      </div>
    </footer>
  );
};

export default Footer;
