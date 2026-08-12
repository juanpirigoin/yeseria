import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';

// Pages
import Home from './pages/Home';
import Restauraciones from './pages/Restauraciones';
import ProductosYeseria from './pages/ProductosYeseria';
import KitsArtistica from './pages/KitsArtistica';
import Esculturas from './pages/Esculturas';
import CartPage from './pages/CartPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/restauraciones" element={<RouteTransition><Restauraciones /></RouteTransition>} />
              <Route path="/productos" element={<RouteTransition><ProductosYeseria /></RouteTransition>} />
              <Route path="/kits" element={<RouteTransition><KitsArtistica /></RouteTransition>} />
              <Route path="/esculturas" element={<RouteTransition><Esculturas /></RouteTransition>} />
              <Route path="/carrito" element={<RouteTransition><CartPage /></RouteTransition>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

// Simple wrapper for scroll-to-top on route changes
function RouteTransition({ children }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return children;
}

export default App;
