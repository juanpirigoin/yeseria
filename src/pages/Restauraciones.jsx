import React from 'react';
import { Shield, Sparkles, Paintbrush, Calendar } from 'lucide-react';
import restauracionImg from '../assets/images/restauracion_1.png';

const Restauraciones = () => {
  const trabajos = [
    {
      id: 1,
      titulo: "Molduras del Salón Luis XIV (Palacio Paz)",
      fecha: "Marzo 2025",
      descripcion: "Recreación integral de cornisas y molduras francesas del siglo XIX a partir de pequeños fragmentos originales dañados por humedad. Se realizaron calcos de silicona in situ y posterior vaciado en taller.",
      imagen: restauracionImg,
      categoria: "Patrimonio Histórico"
    },
    {
      id: 2,
      titulo: "Cúpula de Salón de Espectáculos",
      fecha: "Octubre 2024",
      descripcion: "Estabilización estructural de florones de yeso de 2 metros de diámetro. Se removieron anclajes oxidados y se fijaron nuevas piezas vaciadas con yeso reforzado con fibras de cáñamo.",
      imagen: restauracionImg, // Reusing high-quality asset
      categoria: "Consolidación de Techos"
    },
    {
      id: 3,
      titulo: "Molduras Ornamentales con Dorado a la Hoja",
      fecha: "Julio 2024",
      descripcion: "Restauración de cornisas de yeso con relieves florales en residencia privada de valor patrimonial. Incluyó la limpieza mecánica de capas de pintura superpuestas y reposición de laminado de oro.",
      imagen: restauracionImg,
      categoria: "Pintura y Acabado"
    },
    {
      id: 4,
      titulo: "Fachada de Casona Neoclásica",
      fecha: "Enero 2024",
      descripcion: "Reconstrucción de pilastras y ménsulas exteriores utilizando yeso hidráulico especial para exteriores. Las piezas fueron modeladas siguiendo la planimetría original de 1910.",
      imagen: restauracionImg,
      categoria: "Restauración Exterior"
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1>Restauración de Patrimonio</h1>
          <p>
            Preservamos la memoria arquitectónica. Nuestro taller cuenta con un equipo calificado para la restauración científica y consolidación de yeserías históricas.
          </p>
        </div>
      </header>

      {/* Intro Narrative */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2rem', color: 'var(--color-primary-dark)', marginBottom: '1.5rem' }}>
              El arte de sanar la ornamentación histórica
            </h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.2rem' }}>
              La yesería ornamental es uno de los elementos decorativos más susceptibles a sufrir las inclemencias del tiempo, filtraciones de agua y movimientos estructurales. En nuestro taller empleamos técnicas que respetan la composición original del yeso y sus agregados históricos.
            </p>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              Para cada proyecto realizamos un análisis del estado de conservación, removiendo agregados modernos nocivos y rescatando molduras a través de la toma de moldes de silicona de alta fidelidad directamente sobre los relieves originales sanos.
            </p>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Shield size={20} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontWeight: '500' }}>Técnicas Reversibles</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Paintbrush size={20} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontWeight: '500' }}>Respeto Estilístico</span>
              </div>
            </div>
          </div>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '6px solid white' }}>
            <img src={restauracionImg} alt="Proceso de restauración" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section section-bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Galería de Proyectos</span>
            <h2 className="section-title">Trabajos Recientes</h2>
            <p className="section-subtitle">
              Un recorrido por las obras de recuperación edilicia y patrimonial que hemos llevado a cabo con orgullo.
            </p>
          </div>

          <div className="gallery-grid">
            {trabajos.map((trabajo) => (
              <article key={trabajo.id} className="gallery-card">
                <div className="gallery-image">
                  <img src={trabajo.imagen} alt={trabajo.titulo} />
                </div>
                <div className="gallery-info">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span className="gallery-meta">{trabajo.categoria}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={12} />
                      {trabajo.fecha}
                    </span>
                  </div>
                  <h3 className="gallery-title">{trabajo.titulo}</h3>
                  <p className="gallery-desc">{trabajo.descripcion}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restauraciones;
