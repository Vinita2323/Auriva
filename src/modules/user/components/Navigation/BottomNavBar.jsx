import React from 'react';
import { Home, Store, LayoutGrid, Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function BottomNavBar() {
  const {
    currentView,
    selectedCategory,
    totalCartCount,
    wishlist,
    navigateTo,
    setIsCartOpen
  } = useCart();

  return (
    <nav className="auriva-bottom-nav" aria-label="Mobile App Navigation">
      {/* Home */}
      <button
        onClick={() => navigateTo('home')}
        className={`auriva-bottom-nav-item ${currentView === 'home' ? 'active' : ''}`}
        aria-label="Home"
      >
        <div className="auriva-nav-icon-wrap">
          <Home size={20} strokeWidth={currentView === 'home' ? 2.5 : 2} />
        </div>
        <span>Home</span>
      </button>

      {/* Shop All */}
      <button
        onClick={() => navigateTo('shop', 'all')}
        className={`auriva-bottom-nav-item ${currentView === 'shop' && selectedCategory === 'all' ? 'active' : ''}`}
        aria-label="Shop All"
      >
        <div className="auriva-nav-icon-wrap">
          <Store size={20} strokeWidth={currentView === 'shop' && selectedCategory === 'all' ? 2.5 : 2} />
        </div>
        <span>Shop</span>
      </button>

      {/* Categories */}
      <button
        onClick={() => navigateTo('shop', 'makhana')}
        className={`auriva-bottom-nav-item ${currentView === 'shop' && selectedCategory !== 'all' ? 'active' : ''}`}
        aria-label="Categories"
      >
        <div className="auriva-nav-icon-wrap">
          <LayoutGrid size={20} strokeWidth={currentView === 'shop' && selectedCategory !== 'all' ? 2.5 : 2} />
        </div>
        <span>Categories</span>
      </button>

      {/* Wishlist */}
      <button
        onClick={() => navigateTo('wishlist')}
        className={`auriva-bottom-nav-item ${currentView === 'wishlist' ? 'active' : ''}`}
        aria-label="Wishlist"
      >
        <div className="auriva-nav-icon-wrap">
          <Heart
            size={20}
            strokeWidth={currentView === 'wishlist' ? 2.5 : 2}
            color={wishlist.length > 0 ? '#D32F2F' : 'currentColor'}
            fill={wishlist.length > 0 ? '#D32F2F' : 'none'}
          />
          {wishlist.length > 0 && (
            <span className="auriva-bottom-badge">{wishlist.length}</span>
          )}
        </div>
        <span>Wishlist</span>
      </button>

      {/* Cart */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="auriva-bottom-nav-item"
        aria-label="Shopping Cart"
      >
        <div className="auriva-nav-icon-wrap">
          <ShoppingBag size={20} strokeWidth={2} />
          {totalCartCount > 0 && (
            <span className="auriva-bottom-badge">{totalCartCount}</span>
          )}
        </div>
        <span>Cart</span>
      </button>
    </nav>
  );
}
