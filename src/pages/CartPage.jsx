import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import { Plus, Minus, Trash2, ShoppingBag, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  const handleCheckout = () => {
    setCheckedOut(true);
    clearCart();
  };

  if (checkedOut) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '4rem 2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--color-border)' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-accent-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContainer: 'center', margin: '0 auto 2rem auto', justifyContent: 'center' }}>
            <CreditCard size={36} />
          </div>
          <h1 style={{ color: 'var(--color-primary-dark)', fontSize: '2.5rem', marginBottom: '1rem' }}>¡Pedido Recibido!</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
            Tu solicitud de presupuesto y reserva de piezas ha sido procesada. Nos contactaremos a la brevedad por correo electrónico para coordinar el pago, retiro o envío de tus obras de yesería.
          </p>
          <Link to="/" className="btn btn-primary">
            Volver al Inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1>Carrito de Compras</h1>
          <p>Revisa las piezas seleccionadas y confirma tu reserva artística.</p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon" style={{ display: 'flex', justifyContent: 'center' }}>
                <ShoppingBag size={64} style={{ color: 'var(--color-primary-light)' }} />
              </div>
              <h2 style={{ color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>Tu carrito está vacío</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem auto' }}>
                Explora nuestras colecciones de molduras clásicas, kits interactivos y esculturas para agregar tus obras preferidas.
              </p>
              <Link to="/productos" className="btn btn-primary">
                Ir al Catálogo
              </Link>
            </div>
          ) : (
            <div className="cart-layout">
              <div className="cart-items-container">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cart-item-details">
                      <span className="cart-item-cat">{item.category}</span>
                      <h3 className="cart-item-title">{item.name}</h3>
                      <p className="cart-item-price">${item.price.toLocaleString('es-AR')}</p>
                    </div>
                    <div className="cart-item-actions">
                      <div className="qty-control">
                        <button 
                          className="qty-btn" 
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label="Disminuir cantidad"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="qty-val">{item.quantity}</span>
                        <button 
                          className="qty-btn" 
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label="Aumentar cantidad"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button 
                        className="remove-btn" 
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Eliminar producto"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary-card">
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-dark)', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.8rem' }}>
                  Resumen de Reserva
                </h3>
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${cartTotal.toLocaleString('es-AR')}</span>
                </div>
                <div className="summary-row">
                  <span>Envío / Embalaje especial</span>
                  <span style={{ color: 'var(--color-success)', fontWeight: '600' }}>Sin cargo</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${cartTotal.toLocaleString('es-AR')}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '1rem', lineHeight: '1.4' }}>
                  * Las piezas de yesería artística requieren embalaje acolchado de madera o cartón reforzado para asegurar que lleguen en perfectas condiciones.
                </p>
                <button className="btn btn-primary checkout-btn" onClick={handleCheckout}>
                  <CreditCard size={18} />
                  Confirmar Reserva
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CartPage;
