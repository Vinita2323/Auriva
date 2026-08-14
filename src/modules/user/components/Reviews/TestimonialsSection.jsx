import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { customerReviews } from '../../data/productsData';

export default function TestimonialsSection() {
  return (
    <section className="auriva-reviews-section">
      <div className="auriva-container">
        <div className="auriva-section-header">
          <span className="auriva-section-pill-tag">WHAT OUR CUSTOMERS SAY</span>
          <h2 className="auriva-section-title">
            LOVED ACROSS INDIA
          </h2>
        </div>

        <div className="auriva-reviews-grid">
          {customerReviews.map((review) => (
            <div key={review.id} className="auriva-review-card">
              <div>
                <div className="auriva-review-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#E2A03F" color="#E2A03F" />
                  ))}
                </div>
                <h4 className="auriva-review-title">{review.title}</h4>
                <p className="auriva-review-comment">"{review.comment}"</p>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: 'var(--auriva-gold-dark)', fontWeight: 700, marginBottom: '6px' }}>
                  PURCHASED: {review.product}
                </div>
                <div className="auriva-reviewer-meta">
                  <div>
                    <span className="auriva-reviewer-name">{review.name}</span>
                    <span style={{ color: 'var(--auriva-text-muted)', marginLeft: '6px' }}>• {review.city}</span>
                  </div>
                  <span className="auriva-reviewer-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle size={12} /> Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
