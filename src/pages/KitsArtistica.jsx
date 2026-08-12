import React from 'react';
import ProductCard from '../components/ProductCard';
import kitImg from '../assets/images/kit_1.png';

const KitsArtistica = () => {
  const kits = [
    {
      id: 'kit-1',
      name: "Kit de Vaciado: Esculturas de Manos",
      description: "Crea una réplica exacta en 3D de tus manos entrelazadas. Incluye alginato de alta fidelidad, yeso extra-blanco, recipiente de mezcla y manual instructivo paso a paso.",
      price: 22500,
      image: kitImg,
      category: "Kits de Vaciado"
    },
    {
      id: 'kit-2',
      name: "Kit Esculturas de Yeso Infantiles",
      description: "Kit didáctico para niños. Incluye moldes de látex con figuras de animales, pinceles, témperas de colores y bolsas de yeso de secado rápido. Seguro y divertido.",
      price: 14500,
      image: kitImg,
      category: "Kits Infantiles"
    },
    {
      id: 'kit-3',
      name: "Kit de Relieves Botánicos",
      description: "Aprende la técnica de calco botánico imprimiendo flores y hojas reales sobre arcilla y haciendo el vaciado final en yeso cerámico. Incluye marco de contención y soportes de colgado.",
      price: 21000,
      image: kitImg,
      category: "Kits Creativos"
    },
    {
      id: 'kit-4',
      name: "Kit de Iniciación: Molduras DIY",
      description: "Kit para aficionados de la decoración. Contiene dos moldes de silicona de pequeños apliques de pared, yeso especial para copiado fino y pigmentos para darle acabados de piedra.",
      price: 18000,
      image: kitImg,
      category: "Kits de Vaciado"
    }
  ];

  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1>Kits Artísticos</h1>
          <p>
            Lleva la magia del vaciado de yeso a tu casa. Nuestros kits contienen materiales de grado profesional y guías ilustradas para que crees tus propias esculturas y relieves.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="product-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {kits.map((kit) => (
              <ProductCard key={kit.id} product={kit} />
            ))}
          </div>
        </div>
      </section>

      {/* Workshop safety disclaimer/tips */}
      <section className="section section-bg-alt" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>
            Consejos para tu Taller en Casa
          </h2>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
            Trabajar con yeso es sumamente gratificante, pero requiere seguir ciertas pautas. Recuerda espolvorear el yeso sobre el agua lentamente (no al revés), mezclar con cuidado para no incorporar burbujas de aire y, muy importante, <strong>nunca tirar restos de yeso líquido por el desagüe</strong>. Deja fraguar los restos en un vaso descartable y luego deséchalos de forma sólida.
          </p>
        </div>
      </section>
    </div>
  );
};

export default KitsArtistica;
