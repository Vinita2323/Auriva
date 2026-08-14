import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { productsData } from '../../data/productsData';
import { useCart } from '../../context/CartContext';

export default function BestSellersSection() {
  const { navigateTo } = useCart();
  const bestsellers = productsData.filter(p => p.isBestseller).slice(0, 5);

  return (
    <section id="bestsellers" className="auriva-bestsellers-section">
      <div className="auriva-container">
        {/* Section Header */}
        <div className="auriva-section-topbar">
          <div style={{ flex: 1, textAlign: 'center' }}>
            <span className="auriva-section-pill-tag">CUSTOMER FAVORITES</span>
            <h2 className="auriva-section-title">
              BEST SELLERS
            </h2>
          </div>

          <button
            onClick={() => navigateTo('shop', 'all')}
            className="auriva-view-all-link"
            style={{ position: 'absolute', right: '24px' }}
            aria-label="View all products"
          >
            <span>VIEW ALL PRODUCTS</span>
            <ArrowRight size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* 5 Bestsellers in Grid / Responsive Carousel */}
        <div className="auriva-products-grid">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
