import React, { useState } from 'react';
import { X, Star, ShoppingCart, Check, Heart, ShieldCheck, Sparkles, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductQuickViewModal() {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isWishlisted,
    setIsCartOpen
  } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(
    quickViewProduct?.weightOptions ? quickViewProduct.weightOptions[0] : (quickViewProduct?.weight || '100g')
  );

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedWeight);
    setQuickViewProduct(null);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedWeight);
    setQuickViewProduct(null);
    setIsCartOpen(true);
  };

  return (
    <div className="auriva-modal-overlay" onClick={() => setQuickViewProduct(null)}>
      <div
        className="auriva-modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '780px', padding: '0', overflow: 'hidden' }}
      >
        <button
          onClick={() => setQuickViewProduct(null)}
          className="auriva-modal-close-btn"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr' }}>
          {/* Left Media */}
          <div style={{ backgroundColor: '#FAF8F5', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '30px', position: 'relative' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ maxHeight: '320px', maxWidth: '100%', objectFit: 'contain', borderRadius: 'var(--radius-md)' }}
            />
            {product.badge && (
              <span
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: product.badgeColor || 'var(--auriva-gold)',
                  color: product.badge === 'ROYAL JAR' ? '#FAF5E9' : '#0E2A1C',
                  fontSize: '11px',
                  fontWeight: 800,
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-xs)',
                  letterSpacing: '0.6px'
                }}
              >
                {product.badge}
              </span>
            )}
          </div>

          {/* Right Details */}
          <div style={{ padding: '30px 26px', display: 'flex', flexDirection: 'column', gap: '14px', maxHeight: '80vh', overflowY: 'auto' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--auriva-gold-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {product.category}
                </span>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  style={{ color: wishlisted ? '#D32F2F' : 'var(--auriva-text-muted)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}
                >
                  <Heart size={16} fill={wishlisted ? '#D32F2F' : 'none'} />
                  <span>{wishlisted ? 'Saved' : 'Wishlist'}</span>
                </button>
              </div>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 700, color: 'var(--auriva-primary)', margin: '4px 0 2px' }}>
                {product.name}
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--auriva-text-muted)' }}>{product.subtitle}</p>
            </div>

            {/* Ratings */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ display: 'flex', gap: '2px', color: '#E2A03F' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#E2A03F" color="#E2A03F" />
                ))}
              </div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--auriva-text-body)' }}>{product.rating}</span>
              <span style={{ fontSize: '12px', color: 'var(--auriva-text-muted)' }}>({product.reviewsCount} verified reviews)</span>
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
              <span style={{ fontSize: '24px', fontWeight: 800, color: 'var(--auriva-primary)' }}>₹{product.price}</span>
              {product.originalPrice && (
                <span style={{ fontSize: '16px', color: 'var(--auriva-text-light)', textDecoration: 'line-through' }}>₹{product.originalPrice}</span>
              )}
              {product.discountPercent && (
                <span className="auriva-discount-tag">{product.discountPercent}% OFF</span>
              )}
            </div>

            <p style={{ fontSize: '13.5px', color: 'var(--auriva-text-body)', lineHeight: '1.5' }}>
              {product.description}
            </p>

            {/* Weight options */}
            {product.weightOptions && (
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--auriva-primary)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                  Select Size / Pack:
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {product.weightOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedWeight(opt)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '12px',
                        fontWeight: 700,
                        border: `1.5px solid ${selectedWeight === opt ? 'var(--auriva-primary)' : 'var(--auriva-cream-border)'}`,
                        backgroundColor: selectedWeight === opt ? 'var(--auriva-primary)' : '#FFFFFF',
                        color: selectedWeight === opt ? '#FFFFFF' : 'var(--auriva-text-body)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Stepper & Buttons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <div className="auriva-qty-stepper" style={{ height: '44px' }}>
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="auriva-stepper-btn"
                  style={{ width: '36px', height: '100%' }}
                >
                  <Minus size={14} />
                </button>
                <span className="auriva-stepper-value" style={{ width: '40px', fontSize: '15px' }}>{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="auriva-stepper-btn"
                  style={{ width: '36px', height: '100%' }}
                >
                  <Plus size={14} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="auriva-add-to-cart-btn"
                style={{ flex: 1, height: '44px', margin: 0 }}
              >
                <ShoppingCart size={16} />
                <span>ADD TO CART</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="auriva-btn-gold"
                style={{ padding: '0 18px', height: '44px', fontSize: '12.5px' }}
              >
                BUY NOW
              </button>
            </div>

            {/* Key benefits list */}
            {product.benefits && (
              <div style={{ backgroundColor: 'var(--auriva-primary-subtle)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', marginTop: '8px' }}>
                <span style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--auriva-primary)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                  Key Highlights
                </span>
                <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                  {product.benefits.map((b, i) => (
                    <li key={i} style={{ fontSize: '12px', color: 'var(--auriva-primary-dark)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Check size={14} color="var(--auriva-accent-green)" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
