import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import molduraImg from '../docs/images/moldura_1.png';

const ProductosYeseria = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const products = [
    {
      id: 'prod-1',
      name: "Moldura de Corona Clásica",
      description: "Moldura de yeso tradicional para terminación de techos y paredes con motivos clásicos. Venta por metro lineal.",
      price: 4500,
      image: molduraImg,
      category: "Molduras"
    },
    {
      id: 'prod-2',
      name: "Rosetón Floral de Techo",
      description: "Medallón circular para colocar en el centro de techos, ideal para colgar lámparas. Detalles florales nítidos vaciados a mano.",
      price: 18500,
      image: molduraImg,
      category: "Rosetones"
    },
    {
      id: 'prod-3',
      name: "Pilastra Jónica Acanalada",
      description: "Columna decorativa de medio relieve para empotrar en paredes. Capitel de volutas jónicas sumamente refinado.",
      price: 35000,
      image: molduraImg,
      category: "Pilastras"
    },
    {
      id: 'prod-4',
      name: "Ménsula Decorativa Barroca",
      description: "Ménsula de soporte decorativo para estanterías, marcos o terminaciones de arcos. Estilo barroco con relieves ornamentados.",
      price: 12000,
      image: molduraImg,
      category: "Ménsulas"
    },
    {
      id: 'prod-5',
      name: "Moldura Fina Astrágalo",
      description: "Moldura fina y delgada para crear marcos y boiseries en paredes interiores. Venta por metro lineal.",
      price: 2800,
      image: molduraImg,
      category: "Molduras"
    },
    {
      id: 'prod-6',
      name: "Florón de Yeso Minimalista",
      description: "Rosetón de estilo art-decó con líneas geométricas limpias y escalonadas. Para decoración de ambientes modernos.",
      price: 14200,
      image: molduraImg,
      category: "Rosetones"
    }
  ];

  const categories = ['Todos', 'Molduras', 'Rosetones', 'Pilastras', 'Ménsulas'];

  const filteredProducts = activeFilter === 'Todos'
    ? products
    : products.filter(p => p.category === activeFilter);

  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1>Productos de Yesería</h1>
          <p>
            Catálogo de molduras y ornamentos arquitectónicos fabricados artesanalmente en yeso puro. Ideales para jerarquizar ambientes.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container catalog-container">
          <aside className="catalog-sidebar">
            <h3 className="sidebar-title">Categorías</h3>
            <ul className="sidebar-menu">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    className={activeFilter === cat ? 'active' : ''}
                    onClick={() => setActiveFilter(cat)}
                  >
                    {cat}
                    <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>
                      ({cat === 'Todos' ? products.length : products.filter(p => p.category === cat).length})
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <main>
            {filteredProducts.length > 0 ? (
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', padding: '3rem' }}>
                No se encontraron productos en esta categoría.
              </p>
            )}
          </main>
        </div>
      </section>
    </div>
  );
};

export default ProductosYeseria;
