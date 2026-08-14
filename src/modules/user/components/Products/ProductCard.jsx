import React from 'react';
import { Heart, Star, ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const {
    addToCart,
    toggleWishlist,
    isWishlisted,
    setQuickViewProduct,
    navigateTo
  } = useCart();

  const wishlisted = isWishlisted(product.id);

  const handleCardClick = () => {
    navigateTo('product', product.categorySlug, product);
  };

  return (
    <div className="auriva-product-card">
      {/* Full Bleed Image Thumbnail (Top of Card) */}
      <div
        className="auriva-product-thumb-wrap"
        onClick={handleCardClick}
        title="View product details"
      >
        <img
          src={product.image}
          alt={product.name}
          className="auriva-product-thumb"
          loading="lazy"
        />

        {/* Top badges & actions overlaid on image */}
        <div className="auriva-card-top-row">
          {product.badge ? (
            <span
              className="auriva-bestseller-badge"
              style={{
                backgroundColor: product.badgeColor || 'var(--auriva-gold)',
                color: (product.badgeColor === '#143826' || product.badgeColor === '#0E2A1C' || product.badgeColor === '#B35434' || product.badgeColor === '#4A7C59' || product.badge === 'CUSTOMER FAVORITE') ? '#FFFFFF' : '#0E2A1C'
              }}
            >
              {product.badge}
            </span>
          ) : <span />}

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            className={`auriva-wishlist-btn ${wishlisted ? 'active' : ''}`}
            aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            title={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart
              size={18}
              fill={wishlisted ? '#D32F2F' : 'none'}
              color={wishlisted ? '#D32F2F' : 'currentColor'}
            />
          </button>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="auriva-product-card-body">
        {/* Ratings */}
        <div className="auriva-product-ratings">
          <div className="auriva-stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={13}
                fill="#E2A03F"
                color="#E2A03F"
              />
            ))}
          </div>
          <span className="auriva-rating-count">({product.reviewsCount})</span>
        </div>

        {/* Title & Subtitle */}
        <h3
          className="auriva-product-title"
          onClick={handleCardClick}
        >
          {product.name}
        </h3>
        <p className="auriva-product-subtitle">{product.subtitle}</p>

        {/* Price */}
        <div className="auriva-product-pricing">
          <span className="auriva-current-price">₹{product.price}</span>
          {product.originalPrice && (
            <span className="auriva-original-price">₹{product.originalPrice}</span>
          )}
          {product.discountPercent && (
            <span className="auriva-discount-tag">{product.discountPercent}% OFF</span>
          )}
        </div>

        {/* Add To Cart & Quick View Button */}
        <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product, 1, product.weight);
            }}
            className="auriva-add-to-cart-btn"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart size={15} />
            <span>ADD TO CART</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="auriva-icon-btn"
            style={{ width: '42px', height: '42px', flexShrink: 0 }}
            title="Quick preview"
            aria-label="Quick view"
          >
            <Eye size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}
