import React, { useState } from 'react';
import { ArrowRight, Leaf, ShieldCheck, Heart, Users, Sparkles, X, Wheat, HeartPulse } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import classicMakhanaRemoveBg from '../../../../assets/Classic_Makhana-removebg-preview.png';
import makhanaPng from '../../../../assets/Makhana.png';

export default function NatureStorySection() {
  const { navigateTo } = useCart();
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  return (
    <>
      <section className="auriva-philosophy-fullwidth-section">
        <div className="auriva-philosophy-fullwidth-grid">
          
          {/* Left Column: Pure by Nature Banner (Spans to left edge of screen) */}
          <div className="auriva-philosophy-left-col">
            <div className="auriva-philosophy-left-inner">
              
              {/* Top Header Content */}
              <div className="auriva-philosophy-top-content">
                <h2 className="auriva-philosophy-main-title">
                  Pure by Nature,<br />
                  <span>Made for You</span>
                </h2>
                <p className="auriva-philosophy-sub-text">
                  Wholesome Makhana, for a healthier tomorrow.
                </p>
              </div>

              {/* Middle Row: 100% Natural Stamp on Left + Makhana Bowl on Right */}
              <div className="auriva-philosophy-middle-content">
                {/* 100% Natural Stamp Badge */}
                <div className="auriva-philosophy-stamp">
                  <div className="auriva-stamp-ring">
                    <span className="auriva-stamp-percent">100%</span>
                    <span className="auriva-stamp-sub">NATURAL</span>
                    <Leaf size={12} className="auriva-stamp-leaf" />
                  </div>
                </div>

                {/* Hero Makhana Bowl Image */}
                <div className="auriva-philosophy-img-stage">
                  <img
                    src={classicMakhanaRemoveBg}
                    alt="Pure Roasted Makhana Bowl"
                    className="auriva-philosophy-hero-img"
                  />
                </div>
              </div>

              {/* Bottom Dark Green Pill Bar */}
              <div className="auriva-philosophy-bottom-pill-bar">
                <div className="auriva-pill-item">
                  <div className="auriva-pill-icon-ring">
                    <Wheat size={14} />
                  </div>
                  <div className="auriva-pill-text">
                    <strong>High in</strong>
                    <span>Protein</span>
                  </div>
                </div>

                <div className="auriva-pill-item">
                  <div className="auriva-pill-icon-ring">
                    <Sparkles size={14} />
                  </div>
                  <div className="auriva-pill-text">
                    <strong>Gluten</strong>
                    <span>Free</span>
                  </div>
                </div>

                <div className="auriva-pill-item">
                  <div className="auriva-pill-icon-ring">
                    <HeartPulse size={14} />
                  </div>
                  <div className="auriva-pill-text">
                    <strong>Low in</strong>
                    <span>Calories</span>
                  </div>
                </div>

                <div className="auriva-pill-item">
                  <div className="auriva-pill-icon-ring">
                    <Leaf size={14} />
                  </div>
                  <div className="auriva-pill-text">
                    <strong>Rich in</strong>
                    <span>Antioxidants</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Center Seam Emblem Button on divider */}
          <div className="auriva-philosophy-seam-emblem">
            <div className="auriva-emblem-badge">
              <Leaf size={22} color="#D4A359" />
            </div>
          </div>

          {/* Right Column: Our Philosophy Narrative (Spans to right edge of screen) */}
          <div className="auriva-philosophy-right-col">
            <div className="auriva-philosophy-right-inner">
              
              <div className="auriva-philosophy-tag-row">
                <Leaf size={14} color="#A8762B" />
                <span className="auriva-philosophy-tag">OUR PHILOSOPHY</span>
                <Leaf size={14} color="#A8762B" style={{ transform: 'scaleX(-1)' }} />
              </div>

              <h2 className="auriva-philosophy-heading">
                From Nature <br />
                to <span className="auriva-script-accent">Your Table <span className="auriva-script-heart">♡</span></span>
              </h2>

              <p className="auriva-philosophy-body-text">
                At Aurivá, we handpick the finest makhana from trusted sources and craft them with uncompromised care to bring you food that is pure, wholesome and full of goodness.
              </p>

              <button
                onClick={() => setIsStoryModalOpen(true)}
                className="auriva-philosophy-cta-btn"
                aria-label="Discover Our Story"
              >
                <span>DISCOVER OUR STORY</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </button>

              {/* 4 Feature Columns */}
              <div className="auriva-philosophy-features">
                <div className="auriva-philosophy-feature">
                  <div className="auriva-feature-icon-circle green">
                    <Leaf size={20} />
                  </div>
                  <span>Natural Ingredients</span>
                </div>

                <div className="auriva-philosophy-feature">
                  <div className="auriva-feature-icon-circle gold">
                    <ShieldCheck size={20} />
                  </div>
                  <span>Sourced Responsibly</span>
                </div>

                <div className="auriva-philosophy-feature">
                  <div className="auriva-feature-icon-circle peach">
                    <Heart size={20} />
                  </div>
                  <span>Made with Care</span>
                </div>

                <div className="auriva-philosophy-feature">
                  <div className="auriva-feature-icon-circle sage">
                    <Users size={20} />
                  </div>
                  <span>Loved by Families</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Story Narrative Modal */}
      {isStoryModalOpen && (
        <div className="auriva-modal-overlay" onClick={() => setIsStoryModalOpen(false)}>
          <div className="auriva-modal-card" onClick={e => e.stopPropagation()} style={{ padding: '32px' }}>
            <button
              onClick={() => setIsStoryModalOpen(false)}
              className="auriva-modal-close-btn"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <img src="/AurivaLogo.png" alt="Aurivá Logo" className="auriva-logo-img" style={{ height: '72px', margin: '0 auto 12px', display: 'block' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: 'var(--auriva-primary)' }}>
                The Aurivá Journey
              </h3>
              <p style={{ fontSize: '12.5px', color: 'var(--auriva-gold-dark)', fontWeight: 700, letterSpacing: '1px' }}>
                PURITY • NUTRITION • INTEGRITY
              </p>
            </div>

            <div style={{ fontSize: '14.5px', color: 'var(--auriva-text-body)', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '14px' }}>
                Born out of a simple quest for authentic, unadulterated snacking, Aurivá was founded to revive ancient Indian superfoods. We believe that true wellness begins when nature’s purest harvests reach your table in their uncompromised glory.
              </p>
              <p style={{ marginBottom: '14px' }}>
                Our signature fox nuts (Makhana) are harvested directly from the nutrient-rich wetlands of Mithila, slow-roasted in cold-pressed virgin oils, and dusted with hand-pounded herbs. No palm oil. No artificial colors. Just pure, wholesome crunch.
              </p>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
              <button
                onClick={() => {
                  setIsStoryModalOpen(false);
                  navigateTo('shop', 'all');
                }}
                className="auriva-btn-gold"
              >
                <span>EXPLORE OUR SNACKS</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
