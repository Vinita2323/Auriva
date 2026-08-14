import React from 'react';
import { Leaf, Search, Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function MobileHeader() {
  const {
    totalCartCount,
    wishlist,
    setIsCartOpen,
    setIsSearchOpen,
    navigateTo
  } = useCart();

  return (
    <div className="auriva-mobile-header">
      <div className="auriva-mobile-header-inner">
        {/* Brand Logo */}
        <button
          onClick={() => navigateTo('home')}
          className="auriva-brand-logo"
          aria-label="Aurivá Home"
        >
          <img src="/AurivaLogo.png" alt="Aurivá Logo" className="auriva-logo-img auriva-logo-mobile" />
        </button>

        {/* Action icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => setIsSearchOpen(true)}
            className="auriva-icon-btn"
            style={{ width: '36px', height: '36px' }}
            aria-label="Search"
          >
            <Search size={18} />
          </button>

          <button
            onClick={() => navigateTo('wishlist')}
            className="auriva-icon-btn"
            style={{ width: '36px', height: '36px' }}
            aria-label="Wishlist"
          >
            <Heart size={18} color={wishlist.length > 0 ? '#D32F2F' : 'currentColor'} />
            {wishlist.length > 0 && (
              <span className="auriva-badge-count" style={{ width: '16px', height: '16px', fontSize: '9px' }}>
                {wishlist.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="auriva-icon-btn"
            style={{ width: '36px', height: '36px' }}
            aria-label="Cart"
          >
            <ShoppingBag size={18} />
            {totalCartCount > 0 && (
              <span className="auriva-badge-count" style={{ width: '16px', height: '16px', fontSize: '9px' }}>
                {totalCartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
