import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart, ShieldCheck, Check, ArrowLeft, ArrowRight, Sparkles, Leaf, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { productsData } from '../data/productsData';
import ProductCard from '../components/Products/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const {
    activeProduct,
    addToCart,
    toggleWishlist,
    isWishlisted,
    navigateTo,
    setIsCartOpen
  } = useCart();

  const product = (id ? productsData.find(p => p.id === id) : null) || activeProduct || productsData[0];
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(
    product.weightOptions ? product.weightOptions[0] : (product.weight || '100g')
  );

  const wishlisted = isWishlisted(product.id);

  // Related products
  const relatedProducts = productsData
    .filter(p => p.id !== product.id && p.categorySlug === product.categorySlug)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedWeight);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedWeight);
    setIsCartOpen(true);
  };

  return (
    <div style={{ padding: '32px 0 80px', backgroundColor: 'var(--auriva-cream-bg)' }}>
      <div className="auriva-container">
        {/* Breadcrumb Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--auriva-text-muted)', marginBottom: '24px' }}>
          <button onClick={() => navigateTo('home')} style={{ color: 'var(--auriva-primary)', fontWeight: 600 }}>
            Home
          </button>
          <span>/</span>
          <button onClick={() => navigateTo('shop', product.categorySlug)} style={{ color: 'var(--auriva-primary)', fontWeight: 600 }}>
            {product.category}
          </button>
          <span>/</span>
          <span style={{ color: 'var(--auriva-text-body)' }}>{product.name}</span>
        </div>

        {/* Product Details Showcase Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', backgroundColor: '#FFFFFF', padding: '36px', borderRadius: 'var(--radius-xl)', border: '1px solid var(--auriva-cream-border)', boxShadow: 'var(--shadow-sm)', marginBottom: '60px' }}>
          {/* Media column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FAF8F5', borderRadius: 'var(--radius-lg)', padding: '40px', position: 'relative' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ maxHeight: '380px', maxWidth: '100%', objectFit: 'contain' }}
            />
            {product.badge && (
              <span
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  backgroundColor: product.badgeColor || 'var(--auriva-gold)',
                  color: product.badge === 'ROYAL JAR' || product.badge === 'BEST VALUE' ? '#FAF5E9' : '#0E2A1C',
                  fontSize: '11px',
                  fontWeight: 800,
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-xs)',
                  letterSpacing: '0.8px'
                }}
              >
                {product.badge}
              </span>
            )}
          </div>

          {/* Details column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span className="auriva-section-pill-tag">
                  {product.category}
                </span>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: wishlisted ? '#D32F2F' : 'var(--auriva-text-muted)'
                  }}
                >
                  <Heart size={18} fill={wishlisted ? '#D32F2F' : 'none'} />
                  <span>{wishlisted ? 'In Wishlist' : 'Add to Wishlist'}</span>
                </button>
              </div>

              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: 'var(--auriva-primary)', lineHeight: '1.2', marginBottom: '6px' }}>
                {product.name}
              </h1>
              <p style={{ fontSize: '15px', color: 'var(--auriva-text-muted)' }}>{product.subtitle}</p>
            </div>

            {/* Ratings */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', gap: '2px', color: '#E2A03F' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#E2A03F" color="#E2A03F" />
                ))}
              </div>
              <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--auriva-primary)' }}>{product.rating}</span>
              <span style={{ fontSize: '13px', color: 'var(--auriva-text-muted)' }}>({product.reviewsCount} verified customer ratings)</span>
            </div>

            {/* Pricing */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <span style={{ fontSize: '30px', fontWeight: 800, color: 'var(--auriva-primary)' }}>₹{product.price}</span>
              {product.originalPrice && (
                <span style={{ fontSize: '18px', color: 'var(--auriva-text-light)', textDecoration: 'line-through' }}>₹{product.originalPrice}</span>
              )}
              {product.discountPercent && (
                <span className="auriva-discount-tag" style={{ fontSize: '12px', padding: '3px 8px' }}>
                  {product.discountPercent}% OFF
                </span>
              )}
              <span style={{ fontSize: '12px', color: 'var(--auriva-text-muted)', marginLeft: 'auto' }}>Inclusive of all taxes</span>
            </div>

            <p style={{ fontSize: '14.5px', color: 'var(--auriva-text-body)', lineHeight: '1.6' }}>
              {product.description}
            </p>

            {/* Weight selector */}
            {product.weightOptions && (
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--auriva-primary)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  Select Pack Size:
                </label>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {product.weightOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedWeight(opt)}
                      style={{
                        padding: '8px 18px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '13px',
                        fontWeight: 700,
                        border: `1.5px solid ${selectedWeight === opt ? 'var(--auriva-primary)' : 'var(--auriva-cream-border)'}`,
                        backgroundColor: selectedWeight === opt ? 'var(--auriva-primary)' : '#FFFFFF',
                        color: selectedWeight === opt ? '#FFFFFF' : 'var(--auriva-text-body)',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer'
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Group */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
              <div className="auriva-qty-stepper" style={{ height: '48px' }}>
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="auriva-stepper-btn"
                  style={{ width: '40px', height: '100%' }}
                >
                  -
                </button>
                <span className="auriva-stepper-value" style={{ width: '44px', fontSize: '16px' }}>{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="auriva-stepper-btn"
                  style={{ width: '40px', height: '100%' }}
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="auriva-add-to-cart-btn"
                style={{ flex: 1, height: '48px', margin: 0, fontSize: '13.5px' }}
              >
                <ShoppingCart size={18} />
                <span>ADD TO CART</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="auriva-btn-gold"
                style={{ height: '48px', padding: '0 24px', fontSize: '13.5px' }}
              >
                BUY NOW
              </button>
            </div>

            {/* Delivery Perks */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', padding: '16px', backgroundColor: 'var(--auriva-primary-subtle)', borderRadius: 'var(--radius-sm)', marginTop: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: 'var(--auriva-primary)', fontWeight: 700 }}>
                <Truck size={16} /> Free Shipping &gt; ₹499
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: 'var(--auriva-primary)', fontWeight: 700 }}>
                <Sparkles size={16} /> 100% Roasted
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: 'var(--auriva-primary)', fontWeight: 700 }}>
                <ShieldCheck size={16} /> FSSAI Certified
              </div>
            </div>
          </div>
        </div>

        {/* Nutritional Breakdown & Ingredients Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '60px' }}>
          {/* Ingredients & Benefits */}
          <div style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: 'var(--radius-xl)', border: '1px solid var(--auriva-cream-border)' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--auriva-primary)', marginBottom: '16px' }}>
              Ingredients & Wholesomeness
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--auriva-text-body)', lineHeight: '1.6', marginBottom: '20px' }}>
              {product.ingredients}
            </p>

            <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--auriva-primary)', textTransform: 'uppercase', marginBottom: '10px' }}>
              Key Health Benefits
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {product.benefits?.map((b, i) => (
                <li key={i} style={{ fontSize: '13.5px', color: 'var(--auriva-text-body)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="var(--auriva-accent-green)" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nutrition Table */}
          <div style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: 'var(--radius-xl)', border: '1px solid var(--auriva-cream-border)' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--auriva-primary)', marginBottom: '16px' }}>
              Nutritional Values (Per 100g)
            </h3>
            {product.nutrition && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {Object.entries(product.nutrition).map(([key, val]) => (
                  <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--auriva-cream-border)', fontSize: '13.5px' }}>
                    <span style={{ textTransform: 'capitalize', color: 'var(--auriva-text-muted)' }}>{key}</span>
                    <strong style={{ color: 'var(--auriva-primary)' }}>{val}</strong>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="auriva-section-header" style={{ textAlign: 'left', marginBottom: '24px' }}>
              <span className="auriva-section-pill-tag">YOU MAY ALSO ENJOY</span>
              <h2 className="auriva-section-title" style={{ justifyContent: 'flex-start', fontSize: '28px' }}>
                MORE FROM {product.category.toUpperCase()}
              </h2>
            </div>
            <div className="auriva-products-grid">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
