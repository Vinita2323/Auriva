import React from 'react';
import { Heart, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { productsData } from '../data/productsData';

export default function WishlistPage() {
  const {
    wishlist,
    toggleWishlist,
    addToCart,
    navigateTo,
    showToast
  } = useCart();

  const wishlistedProducts = productsData.filter(p => wishlist.includes(p.id));

  const handleAddAllToCart = () => {
    wishlistedProducts.forEach(p => {
      addToCart(p, 1, p.weight);
    });
    showToast(`Added ${wishlistedProducts.length} items to your cart!`);
  };

  return (
    <div style={{ padding: '40px 0 80px', backgroundColor: 'var(--auriva-cream-bg)', minHeight: '60vh' }}>
      <div className="auriva-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="auriva-section-pill-tag">SAVED DELIGHTS</span>
            <h1 className="auriva-section-title" style={{ justifyContent: 'flex-start', fontSize: '32px' }}>
              My Wishlist ({wishlistedProducts.length})
            </h1>
          </div>

          {wishlistedProducts.length > 0 && (
            <button
              onClick={handleAddAllToCart}
              className="auriva-btn-gold"
              style={{ padding: '10px 20px', fontSize: '13px' }}
            >
              <ShoppingCart size={16} />
              <span>MOVE ALL TO CART</span>
            </button>
          )}
        </div>

        {wishlistedProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-xl)', border: '1px solid var(--auriva-cream-border)' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--auriva-primary-subtle)', color: 'var(--auriva-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Heart size={28} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--auriva-primary)', marginBottom: '8px' }}>
              Your wishlist is currently empty
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--auriva-text-muted)', marginBottom: '20px' }}>
              Save your favorite Aurivá Makhana, Royal Dry Fruits, and Seeds for later.
            </p>
            <button
              onClick={() => navigateTo('shop', 'all')}
              className="auriva-btn-gold"
            >
              <span>DISCOVER PRODUCTS</span>
              <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <div className="auriva-products-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
            {wishlistedProducts.map((product) => (
              <div key={product.id} className="auriva-product-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--auriva-gold-dark)', textTransform: 'uppercase' }}>
                    {product.category}
                  </span>
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    style={{ color: '#D32F2F', padding: '4px' }}
                    title="Remove from wishlist"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div
                  className="auriva-product-thumb-wrap"
                  onClick={() => navigateTo('product', product.categorySlug, product)}
                >
                  <img src={product.image} alt={product.name} className="auriva-product-thumb" />
                </div>

                <h3
                  className="auriva-product-title"
                  onClick={() => navigateTo('product', product.categorySlug, product)}
                >
                  {product.name}
                </h3>
                <p className="auriva-product-subtitle">{product.subtitle}</p>

                <div className="auriva-product-pricing">
                  <span className="auriva-current-price">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="auriva-original-price">₹{product.originalPrice}</span>
                  )}
                </div>

                <button
                  onClick={() => addToCart(product, 1, product.weight)}
                  className="auriva-add-to-cart-btn"
                >
                  <ShoppingCart size={15} />
                  <span>ADD TO CART</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
