import React, { useState } from 'react';
import {
  ArrowRight,
  Gift,
  Heart,
  Copy,
  Check,
  PackageOpen,
  Leaf,
  ShieldCheck,
  Wheat,
  UtensilsCrossed
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { productsData } from '../../data/productsData';
import comboMakhanaImg from '../../../../assets/combo Makhana.jpg';
import classicMakhanaRemoveBg from '../../../../assets/Classic_Makhana-removebg-preview.png';

export default function SnackBoxBuilder() {
  const { applyPromo, showToast, addToCart } = useCart();
  const [copied, setCopied] = useState(false);
  const [isBoxModalOpen, setIsBoxModalOpen] = useState(false);
  const [selectedFlavours, setSelectedFlavours] = useState([
    'makhana-peri-peri',
    'makhana-cream-onion',
    'makhana-pudina',
    'california-almonds',
    'super-seeds-mix-7in1'
  ]);

  const boxProduct = productsData.find(p => p.id === 'healthy-snack-combo-box') || productsData[0];

  const handleCopyCoupon = () => {
    navigator.clipboard.writeText('AURIVA10');
    applyPromo('AURIVA10');
    setCopied(true);
    showToast('Coupon AURIVA10 copied and auto-applied to your cart!');
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleFlavour = (id) => {
    if (selectedFlavours.includes(id)) {
      if (selectedFlavours.length <= 1) {
        showToast('Please select at least 1 flavour for your custom box', 'info');
        return;
      }
      setSelectedFlavours(prev => prev.filter(item => item !== id));
    } else {
      if (selectedFlavours.length >= 7) {
        showToast('Maximum 7 flavours per luxury box reached', 'info');
        return;
      }
      setSelectedFlavours(prev => [...prev, id]);
    }
  };

  const handleAddCustomBox = () => {
    addToCart(boxProduct, 1, `Custom 7-Box (${selectedFlavours.length} items)`);
    setIsBoxModalOpen(false);
    showToast('Custom Aurivá Healthy Snack Box added to cart!');
  };

  return (
    <>
      <section className="auriva-boxbuilder-section">
        <div className="auriva-container">
          <div className="auriva-snackbox-promo-grid">
            
            {/* Left Card: The Aurivá Healthy Snack Box */}
            <div className="auriva-snackbox-card">
              {/* Left Image Area */}
              <div className="auriva-snackbox-img-stage">
                <img
                  src={comboMakhanaImg}
                  alt="The Aurivá Healthy Snack Box"
                  className="auriva-snackbox-img"
                  loading="lazy"
                />

                {/* 100% Natural Seal Badge */}
                <div className="auriva-snackbox-seal-badge">
                  <div className="auriva-snackbox-seal-inner">
                    <span className="auriva-seal-percent">100%</span>
                    <span className="auriva-seal-text">NATURAL</span>
                    <Leaf size={12} className="auriva-seal-leaf" />
                  </div>
                </div>
              </div>

              {/* Right Content Area */}
              <div className="auriva-snackbox-content">
                <div className="auriva-snackbox-tag">
                  <span>MADE FOR EVERYONE</span>
                  <Leaf size={13} />
                </div>

                <h3 className="auriva-snackbox-title">
                  The Aurivá <br />
                  <span className="auriva-snackbox-gold-title">Healthy Snack Box</span>
                </h3>

                {/* Lotus Divider */}
                <div className="auriva-lotus-divider">
                  <span className="auriva-lotus-icon">🪷</span>
                </div>

                <p className="auriva-snackbox-desc">
                  7 flavours. One box. Something for everyone. Tailored for conscious snacking and festive gifting.
                </p>

                {/* 3 Feature Rows */}
                <div className="auriva-snackbox-features-list">
                  <div className="auriva-snackbox-feature-item">
                    <div className="auriva-feature-icon-badge sage">
                      <UtensilsCrossed size={16} />
                    </div>
                    <span>7 Delicious Flavours</span>
                  </div>

                  <div className="auriva-snackbox-feature-item">
                    <div className="auriva-feature-icon-badge gold">
                      <Gift size={16} />
                    </div>
                    <span>Perfect for Sharing</span>
                  </div>

                  <div className="auriva-snackbox-feature-item">
                    <div className="auriva-feature-icon-badge peach">
                      <Heart size={16} />
                    </div>
                    <span>Healthy Choice for All</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsBoxModalOpen(true)}
                  className="auriva-snackbox-cta-btn"
                  aria-label="Build your custom box"
                >
                  <span>BUILD YOUR BOX</span>
                  <ArrowRight size={15} strokeWidth={2.5} />
                </button>
              </div>

              {/* Decorative Corner Leaf Accent */}
              <div className="auriva-snackbox-corner-leaf" />
            </div>

            {/* Right Card: Special Welcome Offer Coupon Card */}
            <div className="auriva-welcome-coupon-card">
              {/* Inner Decorative Gold Frame */}
              <div className="auriva-coupon-inner-frame" />

              {/* Top Golden Ribbon */}
              <div className="auriva-ribbon-banner">
                <span>SPECIAL WELCOME OFFER</span>
              </div>

              {/* Main Headline Group */}
              <div className="auriva-coupon-heading-group">
                <span className="auriva-coupon-sub-text">GET</span>
                <h2 className="auriva-coupon-discount-text">10% OFF</h2>
                <span className="auriva-coupon-sub-text">ON YOUR</span>
                <h3 className="auriva-coupon-main-text">FIRST ORDER</h3>
              </div>

              {/* Coupon Ticket Voucher */}
              <div
                className="auriva-coupon-ticket"
                onClick={handleCopyCoupon}
                title="Click to copy & apply code"
                role="button"
                tabIndex={0}
              >
                <div className="auriva-ticket-left">
                  <span>USE CODE</span>
                </div>
                <div className="auriva-ticket-right">
                  <strong>AURIVA10</strong>
                  {copied ? <Check size={18} color="#16A34A" /> : <Copy size={18} color="#6E5C46" />}
                </div>
              </div>

              <span className="auriva-coupon-instruction">
                {copied ? '✓ Applied automatically at checkout' : 'Click to copy code • Use at checkout'}
              </span>

              {/* Floating Bowl Accent in Bottom Right */}
              <img
                src={classicMakhanaRemoveBg}
                alt="Floating roasted makhana bowl"
                className="auriva-coupon-floating-bowl"
              />

              {/* 4 Feature Trust Badges */}
              <div className="auriva-coupon-trust-badges">
                <div className="auriva-trust-badge-item">
                  <div className="auriva-trust-icon-circle">
                    <Leaf size={13} />
                  </div>
                  <span>100%<br />Natural</span>
                </div>

                <div className="auriva-trust-badge-item">
                  <div className="auriva-trust-icon-circle">
                    <ShieldCheck size={13} />
                  </div>
                  <span>No<br />Preservatives</span>
                </div>

                <div className="auriva-trust-badge-item">
                  <div className="auriva-trust-icon-circle">
                    <Wheat size={13} />
                  </div>
                  <span>Gluten<br />Free</span>
                </div>

                <div className="auriva-trust-badge-item">
                  <div className="auriva-trust-icon-circle">
                    <Heart size={13} />
                  </div>
                  <span>Made with<br />Love</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Custom Box Builder Modal */}
      {isBoxModalOpen && (
        <div className="auriva-modal-overlay" onClick={() => setIsBoxModalOpen(false)}>
          <div className="auriva-modal-card" onClick={e => e.stopPropagation()} style={{ padding: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--auriva-primary)' }}>
                  Customise Your Healthy Snack Box
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--auriva-text-muted)' }}>
                  Select up to 7 flavours ({selectedFlavours.length}/7 chosen)
                </p>
              </div>
            </div>

            {/* Product selection grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px', margin: '20px 0' }}>
              {productsData.map(p => {
                const isSelected = selectedFlavours.includes(p.id);
                return (
                  <div
                    key={p.id}
                    onClick={() => toggleFlavour(p.id)}
                    style={{
                      border: `1.5px solid ${isSelected ? 'var(--auriva-gold)' : 'var(--auriva-cream-border)'}`,
                      backgroundColor: isSelected ? 'var(--auriva-gold-light)' : '#FFFFFF',
                      borderRadius: 'var(--radius-sm)',
                      padding: '10px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <img src={p.image} alt={p.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--auriva-primary)' }}>{p.name.replace('Aurivá ', '')}</div>
                      <div style={{ fontSize: '11px', color: 'var(--auriva-text-muted)' }}>{p.weight}</div>
                    </div>
                    {isSelected && <Check size={16} color="var(--auriva-gold-dark)" />}
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--auriva-cream-border)' }}>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--auriva-text-muted)' }}>Combo Offer Price</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--auriva-primary)' }}>₹699 <span style={{ fontSize: '14px', textDecoration: 'line-through', color: 'var(--auriva-text-light)' }}>₹899</span></div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => setIsBoxModalOpen(false)}
                  className="auriva-btn-outline-white"
                  style={{ color: 'var(--auriva-primary)', borderColor: 'var(--auriva-cream-border)' }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCustomBox}
                  className="auriva-btn-gold"
                >
                  Add Box to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
