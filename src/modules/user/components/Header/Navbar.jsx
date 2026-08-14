import React from 'react';
import { useLocation } from 'react-router-dom';
import { Search, User, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const location = useLocation();
  const {
    totalCartCount,
    setIsCartOpen,
    setIsSearchOpen,
    navigateTo,
    showToast
  } = useCart();

  const isHomeActive = location.pathname === '/' || location.pathname === '/home';
  const isAllSnacksActive = location.pathname === '/all-snacks' || location.pathname === '/shop';
  const isBestsellersActive = location.pathname === '/bestsellers' || location.pathname === '/best-sellers';
  const isCombosActive = location.pathname === '/combos' || location.pathname === '/makhana-combos';
  const isAboutActive = location.pathname === '/about' || location.pathname === '/about-us';

  return (
    <header className="auriva-navbar">
      <div className="auriva-container">
        <div className="auriva-navbar-inner">
          {/* Brand Logo */}
          <button
            onClick={() => navigateTo('home')}
            className="auriva-brand-logo"
            aria-label="Aurivá Home"
          >
            <img src="/AurivaLogo.png" alt="Aurivá Logo" className="auriva-logo-img" />
          </button>

          {/* Desktop Navigation Links with real URL routing */}
          <nav aria-label="Main Navigation">
            <ul className="auriva-nav-links">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className={`auriva-nav-link ${isHomeActive ? 'active' : ''}`}
                >
                  HOME
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('shop', 'all')}
                  className={`auriva-nav-link ${isAllSnacksActive ? 'active' : ''}`}
                >
                  ALL SNACKS
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('shop', 'bestsellers')}
                  className={`auriva-nav-link ${isBestsellersActive ? 'active' : ''}`}
                >
                  BEST SELLERS
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('shop', 'makhana-combos')}
                  className={`auriva-nav-link ${isCombosActive ? 'active' : ''}`}
                >
                  COMBOS
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className={`auriva-nav-link ${isAboutActive ? 'active' : ''}`}
                >
                  ABOUT US
                </button>
              </li>
            </ul>
          </nav>

          {/* Action Icons */}
          <div className="auriva-nav-actions">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="auriva-icon-btn"
              title="Search healthy snacks"
              aria-label="Search"
            >
              <Search size={20} strokeWidth={2.2} />
            </button>

            <button
              onClick={() => showToast('Welcome to Aurivá Member Club! Sign in with phone OTP coming soon.', 'info')}
              className="auriva-icon-btn"
              title="Account"
              aria-label="My Account"
            >
              <User size={20} strokeWidth={2.2} />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="auriva-icon-btn"
              title="View Cart"
              aria-label="Cart"
            >
              <ShoppingBag size={20} strokeWidth={2.2} />
              {totalCartCount > 0 && (
                <span className="auriva-badge-count">{totalCartCount}</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
