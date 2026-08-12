import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from './CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { name, description, price, image, category } = product;

  return (
    <div className="product-card">
      <div className="product-card-image">
        {category && <span className="product-card-badge">{category}</span>}
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="product-card-info">
        <h3 className="product-card-title">{name}</h3>
        <p className="product-card-desc">{description}</p>
        <div className="product-card-footer">
          <span className="product-card-price">${price.toLocaleString('es-AR')}</span>
          <button 
            className="btn btn-primary btn-sm" 
            onClick={() => addToCart(product)}
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
          >
            <ShoppingCart size={16} />
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
