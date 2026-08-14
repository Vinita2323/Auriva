import React, { useState } from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { productsData } from '../../data/productsData';

export default function HeroSection() {
  const { navigateTo, addToCart, setQuickViewProduct } = useCart();
  const [activeSlide, setActiveSlide] = useState(0);

  const heroProduct = productsData.find(p => p.id === 'makhana-peri-peri') || productsData[0];

  return (
    <section className="auriva-hero-section">
      <div className="auriva-container">
        <div className="auriva-hero-grid">
          {/* Left Column: Headline & Call To Actions */}
          <div className="auriva-hero-content">
            <h1 className="auriva-hero-title">
              Nourishing <br />
              <em>Naturally.</em>
            </h1>
            
            <p className="auriva-hero-subtitle">
              Wholesome goodness for everyday living. Pure ingredients, slow-roasted perfection, and zero compromise on taste.
            </p>

            <div className="auriva-hero-cta-group">
              <button
                onClick={() => navigateTo('shop', 'all')}
                className="auriva-btn-gold"
                aria-label="Shop All Products"
              >
                <span>SHOP NOW</span>
                <ArrowRight size={17} strokeWidth={2.5} />
              </button>

              <button
                onClick={() => navigateTo('about')}
                className="auriva-btn-outline-white"
                aria-label="Explore Aurivá Story"
              >
                <span>EXPLORE AURIVÁ</span>
              </button>
            </div>

            {/* 4 Feature Badges on Bottom */}
            <div className="auriva-hero-features-row">
              <div className="auriva-hero-feature-item">
                <div className="auriva-feature-icon-badge">
                  <Sparkles size={18} />
                </div>
                <span className="auriva-feature-text">100% NATURAL</span>
              </div>

              <div className="auriva-hero-feature-item">
                <div className="auriva-feature-icon-badge">
                  <Award size={18} />
                </div>
                <span className="auriva-feature-text">PREMIUM QUALITY</span>
              </div>

              <div className="auriva-hero-feature-item">
                <div className="auriva-feature-icon-badge">
                  <ShieldCheck size={18} />
                </div>
                <span className="auriva-feature-text">HYGIENICALLY PACKED</span>
              </div>

              <div className="auriva-hero-feature-item">
                <div className="auriva-feature-icon-badge">
                  <Heart size={18} />
                </div>
                <span className="auriva-feature-text">MADE FOR YOU</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Visual */}
          <div className="auriva-hero-visual-wrap">
            <div className="auriva-hero-image-stage">
              <video
                src="/HeroPageVideo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="auriva-hero-main-img"
              />

              {/* Floating Product Badge / Pouch Preview */}
              <div
                className="auriva-hero-product-pouch"
                onClick={() => setQuickViewProduct(heroProduct)}
                style={{ cursor: 'pointer' }}
                title="Click for quick view"
              >
                <div>
                  <span className="auriva-hero-pouch-badge">100% ROASTED</span>
                  <div className="auriva-hero-pouch-title">AURIVÁ MAKHANA</div>
                  <div style={{ fontSize: '11px', color: '#D6E4DB', marginBottom: '2px' }}>Peri Peri Crunch</div>
                  <div className="auriva-hero-pouch-price">₹149 <span style={{ fontSize: '11px', color: '#A8B9B0', textDecoration: 'line-through' }}>₹179</span></div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(heroProduct, 1, '100g');
                  }}
                  className="auriva-icon-btn"
                  style={{
                    backgroundColor: 'var(--auriva-gold)',
                    color: '#0E2A1C',
                    width: '38px',
                    height: '38px'
                  }}
                  title="Add to Cart"
                  aria-label="Add to cart"
                >
                  <ShoppingCart size={18} />
                </button>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="auriva-hero-slider-dots">
              <span className={`auriva-dot ${activeSlide === 0 ? 'active' : ''}`} onClick={() => setActiveSlide(0)}></span>
              <span className={`auriva-dot ${activeSlide === 1 ? 'active' : ''}`} onClick={() => setActiveSlide(1)}></span>
              <span className={`auriva-dot ${activeSlide === 2 ? 'active' : ''}`} onClick={() => setActiveSlide(2)}></span>
              <span className={`auriva-dot ${activeSlide === 3 ? 'active' : ''}`} onClick={() => setActiveSlide(3)}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
