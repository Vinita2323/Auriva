import React, { useState, useMemo } from 'react';
import { X, Search, ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { productsData } from '../../data/productsData';

const POPULAR_SEARCHES = [
  'Peri Peri Makhana',
  'Cream & Onion',
  'California Almonds',
  'Royal Mixed Dry Fruits',
  '7-in-1 Super Seeds',
  'Healthy Snack Box'
];

export default function SearchModal() {
  const {
    isSearchOpen,
    setIsSearchOpen,
    setQuickViewProduct,
    addToCart,
    navigateTo
  } = useCart();

  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return productsData.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isSearchOpen) return null;

  return (
    <div className="auriva-modal-overlay" onClick={() => setIsSearchOpen(false)}>
      <div
        className="auriva-modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '640px', padding: '24px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--auriva-primary)' }}>
            Search Aurivá Store
          </h3>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="auriva-modal-close-btn"
            style={{ position: 'static' }}
            aria-label="Close search"
          >
            <X size={18} />
          </button>
        </div>

        {/* Input box */}
        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <Search
            size={20}
            color="var(--auriva-primary)"
            style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            type="text"
            placeholder="Search Makhana, Almonds, Seeds, Grains..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              width: '100%',
              padding: '14px 44px 14px 44px',
              fontSize: '15px',
              border: '2px solid var(--auriva-cream-border)',
              borderRadius: 'var(--radius-md)',
              outline: 'none',
              backgroundColor: '#FAF8F5'
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--auriva-text-muted)' }}
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Popular searches suggestions */}
        {!query && (
          <div>
            <span style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--auriva-gold-dark)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>
              Trending Searches
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {POPULAR_SEARCHES.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  style={{
                    backgroundColor: 'var(--auriva-primary-subtle)',
                    color: 'var(--auriva-primary)',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-pill)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {query && (
          <div>
            <div style={{ fontSize: '13px', color: 'var(--auriva-text-muted)', marginBottom: '14px' }}>
              Found {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'} for "{query}"
            </div>

            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <p style={{ fontSize: '14.5px', color: 'var(--auriva-text-body)' }}>No matching snacks found.</p>
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    navigateTo('shop', 'all');
                  }}
                  className="auriva-btn-gold"
                  style={{ marginTop: '12px', padding: '10px 20px', fontSize: '12px' }}
                >
                  Browse Full Catalog
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '50vh', overflowY: 'auto' }}>
                {filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setQuickViewProduct(p);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px',
                      border: '1px solid var(--auriva-cream-border)',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease'
                    }}
                  >
                    <img src={p.image} alt={p.name} style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '4px' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--auriva-primary)' }}>{p.name}</div>
                      <div style={{ fontSize: '11.5px', color: 'var(--auriva-text-muted)' }}>{p.subtitle} • {p.weight}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--auriva-primary)' }}>₹{p.price}</div>
                      <span style={{ fontSize: '11px', color: 'var(--auriva-gold-dark)', fontWeight: 700 }}>Quick View →</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
