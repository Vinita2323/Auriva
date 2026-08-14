import React, { useState } from 'react';
import { Leaf, ArrowRight, ShieldCheck, Truck, RefreshCw, Mail } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Footer() {
  const { navigateTo, showToast } = useCart();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    showToast('Thank you for subscribing to Aurivá Wellness Club!');
    setEmail('');
  };

  return (
    <footer className="auriva-footer">
      <div className="auriva-container">
        {/* Main Footer Grid */}
        <div className="auriva-footer-grid">
          {/* Brand Col */}
          <div className="auriva-footer-brand-col">
            <button
              onClick={() => navigateTo('home')}
              className="auriva-brand-logo"
              aria-label="Aurivá Home"
              style={{ background: 'none', border: 'none', padding: 0 }}
            >
              <img src="/AurivaLogo.png" alt="Aurivá Logo" className="auriva-logo-img auriva-logo-footer" />
            </button>

            <p className="auriva-footer-desc">
              Crafted with purest harvests from trusted organic farms. 100% natural, roasted, preservative-free snacks for mindful living.
            </p>

            <div style={{ display: 'flex', gap: '16px', color: 'var(--auriva-gold)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
                <ShieldCheck size={16} /> 100% Secure
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
                <Truck size={16} /> Fast Pan-India Delivery
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="auriva-footer-heading">SHOP CATEGORIES</h4>
            <ul className="auriva-footer-links">
              <li>
                <button onClick={() => navigateTo('shop', 'classic-makhana')} className="auriva-footer-link">
                  Classic Makhana
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop', 'flavoured-makhana')} className="auriva-footer-link">
                  Flavoured Makhana
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop', 'premium-makhana')} className="auriva-footer-link">
                  Premium Jumbo Makhana
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop', 'makhana-combos')} className="auriva-footer-link">
                  Makhana Combos & Hampers
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop', 'healthy-fitness-makhana')} className="auriva-footer-link">
                  Healthy / Fitness Makhana
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="auriva-footer-heading">CUSTOMER CARE</h4>
            <ul className="auriva-footer-links">
              <li>
                <button onClick={() => navigateTo('about')} className="auriva-footer-link">
                  Our Story & Sourcing
                </button>
              </li>
              <li>
                <button onClick={() => showToast('Orders dispatched within 24 hours via premium express couriers.', 'info')} className="auriva-footer-link">
                  Track Your Order
                </button>
              </li>
              <li>
                <button onClick={() => showToast('Free returns within 7 days for any damaged items.', 'info')} className="auriva-footer-link">
                  Shipping & Returns
                </button>
              </li>
              <li>
                <a href="tel:+919876543210" className="auriva-footer-link">
                  Support: +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:care@auriva.in" className="auriva-footer-link">
                  Email: care@auriva.in
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="auriva-footer-heading">JOIN THE WELLNESS CLUB</h4>
            <p style={{ fontSize: '13px', color: '#B2C4B9', lineHeight: '1.5' }}>
              Subscribe to receive exclusive offers, new crop harvest alerts, and nutrition recipes.
            </p>

            <form onSubmit={handleSubscribe} className="auriva-newsletter-input-wrap">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auriva-newsletter-input"
                aria-label="Email address"
              />
              <button type="submit" className="auriva-newsletter-btn" aria-label="Subscribe">
                <ArrowRight size={18} />
              </button>
            </form>

            <div style={{ marginTop: '12px', fontSize: '11.5px', color: '#8E9F94' }}>
              Get 10% off your first order using code <strong style={{ color: 'var(--auriva-gold)' }}>AURIVA10</strong>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="auriva-footer-bottom">
          <div>
            © {new Date().getFullYear()} Aurivá Foods Pvt. Ltd. All rights reserved. Nourishing Naturally.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>FSSAI Lic. No. 10021011000123</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
