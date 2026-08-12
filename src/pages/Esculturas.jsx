import React from 'react';
import ProductCard from '../components/ProductCard';
import esculturaImg from '../assets/images/escultura_1.png';

const Esculturas = () => {
  const esculturas = [
    {
      id: 'esc-1',
      name: "Busto Clásico de César Augusto",
      description: "Réplica a escala del famoso busto del emperador Augusto. Acabado blanco tiza pulido con base cuadrada pesada, ideal para bibliotecas y estudios.",
      price: 52000,
      image: esculturaImg,
      category: "Bustos Clásicos"
    },
    {
      id: 'esc-2',
      name: "Relieve Mural: Venus de Milo",
      description: "Bajorrelieve rectangular de yeso reforzado con ganchos traseros de alambre galvanizado. Reproducción fiel de la silueta griega, ideal para colgar.",
      price: 38000,
      image: esculturaImg,
      category: "Relieves"
    },
    {
      id: 'esc-3',
      name: "Escultura Abstracta Orgánica",
      description: "Pieza de diseño contemporáneo esculpida directamente en yeso húmedo por nuestros artistas locales. Formas curvas y texturas rugosas combinadas.",
      price: 45000,
      image: esculturaImg,
      category: "Contemporáneo"
    },
    {
      id: 'esc-4',
      name: "Relieve Barroco 'Los Querubines'",
      description: "Placa decorativa de yeso representando querubines rodeados de guirnaldas y flores. Vaciado clásico con pátina envejecida en tonos siena.",
      price: 28000,
      image: esculturaImg,
      category: "Relieves"
    }
  ];

  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1>Esculturas y Bustos</h1>
          <p>
            Piezas de arte modeladas y esculpidas a mano en nuestro taller. Delicias tridimensionales clásicas y contemporáneas para ambientar hogares sofisticados.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="product-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {esculturas.map((escultura) => (
              <ProductCard key={escultura.id} product={escultura} />
            ))}
          </div>
        </div>
      </section>

      {/* Commission request banner */}
      <section className="section section-bg-alt" style={{ padding: '5rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>
              ¿Buscas un diseño a medida?
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Nuestros escultores modelan proyectos personalizados a partir de fotografías, planos o bocetos. Podemos esculpir escudos familiares, bustos personalizados, bajorrelieves corporativos o molduras especiales que se adapten a tu espacio.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary-dark)' }}>Solicita tu Presupuesto</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                Escríbenos contándonos tu idea y te responderemos en menos de 48 horas laborales con una propuesta técnica.
              </p>
              <a href="mailto:info@yeseriaartistica.com" className="btn btn-primary" style={{ width: '100%' }}>
                Contactar Escultor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Esculturas;
