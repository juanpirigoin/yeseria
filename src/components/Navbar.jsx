import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBag, Sparkles, Menu, X } from 'lucide-react';
import { useCart } from './CartContext';

const navItems = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/restauraciones', label: 'Restauraciones' },
  { to: '/productos', label: 'Productos' },
  { to: '/kits', label: 'Kits Artísticos' },
  { to: '/esculturas', label: 'Esculturas' },
];

const Navbar = () => {
  const { cartItemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <Sparkles size={24} className="logo-icon" />
          Yesería<span>Artística</span>
        </NavLink>

        <button
          type="button"
          className={`nav-toggle ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
          {navItems.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink to="/carrito" className="cart-icon-container" aria-label="Carrito de compras" onClick={closeMenu}>
          <ShoppingBag size={20} />
          {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
