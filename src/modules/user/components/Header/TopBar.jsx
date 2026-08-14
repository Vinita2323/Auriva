import React from 'react';
import { Truck, Sparkles, ShieldCheck, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="auriva-topbar">
      <div className="auriva-container">
        <div className="auriva-topbar-content">
          <div className="auriva-topbar-item">
            <Truck size={14} className="icon" />
            <span>Free shipping on orders above ₹499</span>
          </div>
          
          <span className="auriva-topbar-divider">|</span>
          
          <div className="auriva-topbar-item">
            <Sparkles size={14} className="icon" />
            <span>100% Natural Ingredients</span>
          </div>
          
          <span className="auriva-topbar-divider">|</span>
          
          <div className="auriva-topbar-item">
            <ShieldCheck size={14} className="icon" />
            <span>Secure Payments</span>
          </div>
          
          <span className="auriva-topbar-divider">|</span>
          
          <a href="tel:+919876543210" className="auriva-topbar-item">
            <Phone size={14} className="icon" />
            <span>+91 98765 43210</span>
          </a>
        </div>
      </div>
    </div>
  );
}
