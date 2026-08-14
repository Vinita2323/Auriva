import React, { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/Products/ProductCard';
import { productsData } from '../data/productsData';
import { categoriesData } from '../data/categoriesData';
import { useCart } from '../context/CartContext';
import {
  SlidersHorizontal,
  LayoutGrid,
  Leaf,
  Crown,
  Gift,
  Heart
} from 'lucide-react';
import shopBannerImg from '../../../assets/shop_banner_bg.jpg';

const DIETARY_TAGS = ['All', 'High Protein', 'Gluten-Free', '100% Roasted', 'Vegan'];

export default function ShopPage({ defaultCategory }) {
  const { categorySlug } = useParams();
  const { selectedCategory, setSelectedCategory, navigateTo } = useCart();
  const [activeDietary, setActiveDietary] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const effectiveCategory = categorySlug || defaultCategory || selectedCategory || 'all';

  useEffect(() => {
    if (categorySlug) {
      setSelectedCategory(categorySlug);
    } else if (defaultCategory) {
      setSelectedCategory(defaultCategory);
    }
  }, [categorySlug, defaultCategory, setSelectedCategory]);

  const filteredProducts = useMemo(() => {
    let result = [...productsData];

    // Category filter
    if (effectiveCategory && effectiveCategory !== 'all') {
      if (effectiveCategory === 'bestsellers') {
        result = result.filter(p => p.isBestseller);
      } else {
        result = result.filter(p => p.categorySlug === effectiveCategory);
      }
    }

    // Dietary filter
    if (activeDietary !== 'All') {
      if (activeDietary === 'High Protein') {
        result = result.filter(p => p.benefits?.some(b => b.toLowerCase().includes('protein')) || p.categorySlug === 'makhana');
      } else if (activeDietary === 'Gluten-Free') {
        result = result.filter(p => p.benefits?.some(b => b.toLowerCase().includes('gluten')) || p.categorySlug === 'makhana');
      } else if (activeDietary === '100% Roasted') {
        result = result.filter(p => p.benefits?.some(b => b.toLowerCase().includes('roasted')) || p.categorySlug === 'makhana');
      } else if (activeDietary === 'Vegan') {
        result = result.filter(p => p.categorySlug !== 'healthy-snacks');
      }
    }

    // Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [effectiveCategory, activeDietary, sortBy]);

  const activeCategoryObj = categoriesData.find(c => c.slug === effectiveCategory);

  const getPageHeading = () => {
    if (effectiveCategory === 'bestsellers') {
      return {
        pill: 'CUSTOMER FAVORITES',
        title: 'BEST SELLERS',
        desc: 'Our most-loved hand-roasted Makhana, premium superfoods & wholesome snacks with top customer reviews.'
      };
    }
    if (effectiveCategory === 'makhana-combos') {
      return {
        pill: 'CURATED BUNDLES',
        title: 'MAKHANA COMBOS & GIFT BOXES',
        desc: 'Multi-flavour assorted hampers, party packs, and luxury festive snack gift boxes.'
      };
    }
    if (activeCategoryObj) {
      return {
        pill: 'MAKHANA COLLECTION',
        title: activeCategoryObj.name,
        desc: activeCategoryObj.tagline
      };
    }
    return {
      pill: 'COMPLETE COLLECTION',
      title: 'ALL NOURISHING SNACKS',
      desc: 'Explore our complete range of 100% slow-roasted Makhana, premium dry fruits, super seeds, and wholesome superfoods.'
    };
  };

  const headingInfo = getPageHeading();

  return (
    <div className="auriva-shop-page-wrapper">
      {/* Full-Width Edge-to-Edge Hero Banner */}
      <div
        className="auriva-shop-hero-banner"
        style={{ backgroundImage: `url("${shopBannerImg}")` }}
      >
        {/* 100% Natural Floating Seal Badge */}
        <div className="auriva-shop-seal-badge">
          <div className="auriva-shop-seal-inner">
            <span className="auriva-seal-pct">100%</span>
            <span className="auriva-seal-txt">NATURAL</span>
            <Leaf size={11} className="auriva-seal-leaf-icon" />
          </div>
        </div>

        {/* Center Heading Content */}
        <div className="auriva-shop-banner-center-content">
          <div className="auriva-shop-banner-tag">
            <span className="auriva-tag-line" />
            <span>COMPLETE</span>
            <span className="auriva-tag-icon">🪷</span>
            <span>COLLECTION</span>
            <span className="auriva-tag-line" />
          </div>

          <h1 className="auriva-shop-banner-title">
            <span className="auriva-title-botanical left">🪷</span>
            <span>{headingInfo.title}</span>
            <span className="auriva-title-botanical right">🪷</span>
          </h1>

          <p className="auriva-shop-banner-desc">
            {headingInfo.desc}
          </p>
        </div>
      </div>

      {/* Full-Width Filter and Sort Toolbar */}
      <div className="auriva-shop-toolbar-fullwidth">
        <div className="auriva-shop-toolbar-inner">
          {/* Dietary filters */}
          <div className="auriva-shop-dietary-group">
            <span className="auriva-filter-label">
              <SlidersHorizontal size={14} /> FILTER:
            </span>
            {DIETARY_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveDietary(tag)}
                className={`auriva-dietary-pill-btn ${activeDietary === tag ? 'active' : ''}`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Sort By selector */}
          <div className="auriva-shop-sort-group">
            <label htmlFor="auriva-sort" className="auriva-sort-label">
              SORT BY:
            </label>
            <select
              id="auriva-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="auriva-sort-select"
            >
              <option value="featured">Featured / Bestselling</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      <div className="auriva-container">
        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="auriva-shop-empty-state">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--auriva-primary)', marginBottom: '8px' }}>
              No products found matching the criteria.
            </h3>
            <button
              onClick={() => {
                navigateTo('shop', 'all');
                setActiveDietary('All');
              }}
              className="auriva-btn-gold"
              style={{ marginTop: '12px' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="auriva-products-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
