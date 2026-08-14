import React from 'react';
import { ChevronRight } from 'lucide-react';
import { categoriesData } from '../../data/categoriesData';
import { useCart } from '../../context/CartContext';

export default function CategorySection() {
  const { navigateTo } = useCart();

  return (
    <section className="auriva-category-section">
      <div className="auriva-container">
        {/* Section Heading */}
        <div className="auriva-section-header">
          <span className="auriva-section-pill-tag">EXPLORE OUR RANGE</span>
          <h2 className="auriva-section-title">
            SHOP BY CATEGORY
          </h2>
        </div>

        {/* Category Grid / Carousel */}
        <div className="auriva-category-grid">
          {categoriesData.map((category) => (
            <div
              key={category.id}
              className="auriva-category-card"
              onClick={() => navigateTo('shop', category.slug)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigateTo('shop', category.slug)}
            >
              <div className="auriva-category-image-wrap">
                <img
                  src={category.image}
                  alt={category.name}
                  className="auriva-category-img"
                  loading="lazy"
                />
              </div>

              <h3 className="auriva-category-name">{category.name}</h3>
              <p className="auriva-category-subtitle">{category.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
