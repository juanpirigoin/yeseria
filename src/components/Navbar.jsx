import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBag, Sparkles } from 'lucide-react';
import { useCart } from './CartContext';

const Navbar = () => {
  const { cartItemCount } = useCart();

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <NavLink to="/" className="logo">
          <Sparkles size={24} className="logo-icon" />
          Yesería<span>Artística</span>
        </NavLink>

        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/restauraciones" className={({ isActive }) => (isActive ? 'active' : '')}>
              Restauraciones
            </NavLink>
          </li>
          <li>
            <NavLink to="/productos" className={({ isActive }) => (isActive ? 'active' : '')}>
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink to="/kits" className={({ isActive }) => (isActive ? 'active' : '')}>
              Kits Artísticos
            </NavLink>
          </li>
          <li>
            <NavLink to="/esculturas" className={({ isActive }) => (isActive ? 'active' : '')}>
              Esculturas
            </NavLink>
          </li>
        </ul>

        <NavLink to="/carrito" className="cart-icon-container" aria-label="Carrito de compras">
          <ShoppingBag size={20} />
          {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
