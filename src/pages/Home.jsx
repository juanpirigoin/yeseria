import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Sparkles, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import heroImg from '../assets/images/yeseria_hero.png';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-tag">Talleres Artesanales</span>
            <h1>Moldeando el arte, preservando la historia</h1>
            <p>
              Somos especialistas en yesería artística tradicional y restauración de patrimonio histórico. 
              Creamos molduras, esculturas y kits creativos con la misma dedicación artesanal desde hace más de 30 años.
            </p>
            <div className="hero-buttons">
              <Link to="/productos" className="btn btn-primary">
                Ver Catálogo
              </Link>
              <Link to="/restauraciones" className="btn btn-secondary">
                Ver Restauraciones
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img src={heroImg} alt="Yesería Artística taller y molduras" />
            </div>
            <div className="hero-bg-texture"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Nuestros Valores</span>
            <h2 className="section-title">El oficio de crear con las manos</h2>
            <p className="section-subtitle">
              Combinamos técnicas de vaciado clásicas con materiales modernos para garantizar piezas de altísima calidad estética y durabilidad.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Hammer size={24} />
              </div>
              <h3>Técnica Tradicional</h3>
              <p>
                Utilizamos moldes de silicona y escayola pura, siguiendo las técnicas de vaciado manual heredadas de los maestros yeseros europeos.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Award size={24} />
              </div>
              <h3>Calidad Artística</h3>
              <p>
                Cada moldura, rosetón y busto es repasado individualmente por nuestros escultores para asegurar detalles nítidos y acabados perfectos.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <ShieldCheck size={24} />
              </div>
              <h3>Restauración Profesional</h3>
              <p>
                Reconstruimos piezas faltantes a partir de calcos in situ de molduras históricas en fachadas, cúpulas y residencias de valor patrimonial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Crafts Call to Action */}
      <section className="section section-bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Especialidades</span>
            <h2 className="section-title">Nuestras Categorías</h2>
            <p className="section-subtitle">
              Explora nuestra variedad de trabajos artísticos y molduras decorativas para interiores y exteriores.
            </p>
          </div>

          <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            <div className="feature-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.8rem' }}>Molduras y Decoración</h3>
              <p style={{ flexGrow: 1, marginBottom: '1.5rem' }}>
                Rosetones, cornisas, ménsulas y apliques diseñados para aportar elegancia clásica a techos y paredes.
              </p>
              <Link to="/productos" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontWeight: '600' }}>
                Explorar molduras <ArrowRight size={16} />
              </Link>
            </div>

            <div className="feature-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.8rem' }}>Kits de Modelado</h3>
              <p style={{ flexGrow: 1, marginBottom: '1.5rem' }}>
                Kits completos con yeso, moldes y pinturas para disfrutar de la experiencia del vaciado artístico en tu hogar.
              </p>
              <Link to="/kits" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontWeight: '600' }}>
                Ver kits artísticos <ArrowRight size={16} />
              </Link>
            </div>

            <div className="feature-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.8rem' }}>Esculturas y Bustos</h3>
              <p style={{ flexGrow: 1, marginBottom: '1.5rem' }}>
                Reproducciones de bustos clásicos, bajorrelieves y figuras modernas para galerías de arte y decoración.
              </p>
              <Link to="/esculturas" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontWeight: '600' }}>
                Ver esculturas <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Narrative */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span className="section-tag" style={{ textAlign: 'left' }}>El Taller</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Artesanos del yeso con historia</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.2rem' }}>
              En nuestro taller, el tiempo se detiene. Trabajamos con el mismo celo y devoción que los antiguos yeseros del siglo XIX. Cada mezcla de agua y sulfato de calcio es controlada para lograr la densidad perfecta.
            </p>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.2rem' }}>
              Nos enorgullece saber que nuestras restauraciones visten edificios gubernamentales y teatros emblemáticos, y que nuestros productos decoran hogares que aprecian los acabados hechos a mano sobre la producción industrial masiva.
            </p>
          </div>
          <div style={{ padding: '2rem', background: 'var(--color-accent-light)', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--color-primary-light)' }}>
            <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '1rem', fontStyle: 'italic' }}>"El yeso es una sustancia noble, humilde en su estado natural pero capaz de imitar el mármol, la piedra y la eternidad si se moldea con devoción."</h3>
            <p style={{ textAlign: 'right', fontWeight: '600', color: 'var(--color-primary)' }}>— Maestro Yesero del Taller</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
