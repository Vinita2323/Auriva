import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Sparkles, Tag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    updateQuantity,
    removeFromCart,
    subtotal,
    discountAmount,
    shippingFee,
    progressToFreeShipping,
    amountNeededForFreeShipping,
    finalTotal,
    promoCode,
    setPromoCode,
    appliedPromo,
    applyPromo,
    removePromo,
    setIsCheckoutOpen,
    navigateTo
  } = useCart();

  const [inputCode, setInputCode] = useState('');

  if (!isCartOpen) return null;

  const handleApply = (e) => {
    e.preventDefault();
    applyPromo(inputCode);
  };

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="auriva-drawer-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="auriva-cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="auriva-cart-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingBag size={20} color="var(--auriva-primary)" />
            <h3 className="auriva-cart-title">Your Cart</h3>
            <span style={{ fontSize: '13px', color: 'var(--auriva-text-muted)', fontWeight: 600 }}>
              ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="auriva-modal-close-btn"
            style={{ position: 'static' }}
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Milestone Progress Bar */}
        <div className="auriva-free-shipping-bar-wrap">
          <div className="auriva-shipping-text">
            {amountNeededForFreeShipping > 0 ? (
              <span>
                Add <strong style={{ color: 'var(--auriva-gold-dark)' }}>₹{amountNeededForFreeShipping}</strong> more for <strong>FREE SHIPPING!</strong>
              </span>
            ) : (
              <span style={{ color: 'var(--auriva-accent-green)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Sparkles size={14} /> Congratulations! You unlocked FREE Pan-India Shipping!
              </span>
            )}
          </div>
          <div className="auriva-progress-track">
            <div
              className="auriva-progress-fill"
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>

        {/* Cart items list */}
        {cartItems.length === 0 ? (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px', textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--auriva-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: 'var(--auriva-primary)' }}>
              <ShoppingBag size={36} />
            </div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--auriva-primary)', marginBottom: '8px' }}>
              Your shopping bag is empty
            </h4>
            <p style={{ fontSize: '14px', color: 'var(--auriva-text-muted)', marginBottom: '20px' }}>
              Discover pure, slow-roasted deliciousness and healthy snacks.
            </p>
            <button
              onClick={() => {
                setIsCartOpen(false);
                navigateTo('shop', 'all');
              }}
              className="auriva-btn-gold"
            >
              <span>EXPLORE PRODUCTS</span>
              <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <div className="auriva-cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="auriva-cart-item">
                <div className="auriva-cart-item-img-wrap">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="auriva-cart-item-img"
                  />
                </div>

                <div className="auriva-cart-item-info">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h4 className="auriva-cart-item-name">{item.product.name}</h4>
                      <p className="auriva-cart-item-weight">Pack: {item.selectedWeight}</p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{ color: 'var(--auriva-text-light)', padding: '4px' }}
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="auriva-cart-item-bottom">
                    {/* Quantity Stepper */}
                    <div className="auriva-qty-stepper">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="auriva-stepper-btn"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="auriva-stepper-value">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="auriva-stepper-btn"
                        aria-label="Increase quantity"
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    <span className="auriva-cart-item-price">
                      ₹{item.unitPrice * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Summary */}
        {cartItems.length > 0 && (
          <div className="auriva-cart-footer">
            {/* Promo Code Input */}
            <div style={{ marginBottom: '14px' }}>
              {appliedPromo ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#E8F5E9', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid #A5D6A7' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', color: 'var(--auriva-accent-green)', fontWeight: 700 }}>
                    <Tag size={14} />
                    <span>{appliedPromo.code} (10% OFF applied)</span>
                  </div>
                  <button onClick={removePromo} style={{ fontSize: '11px', color: '#D32F2F', fontWeight: 700 }}>
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} style={{ display: 'flex', gap: '6px' }}>
                  <input
                    type="text"
                    placeholder="Enter Coupon (e.g. AURIVA10)"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '8px 12px',
                      fontSize: '12.5px',
                      border: '1px solid var(--auriva-cream-border)',
                      borderRadius: 'var(--radius-sm)',
                      textTransform: 'uppercase',
                      outline: 'none'
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: 'var(--auriva-primary)',
                      color: '#FFFFFF',
                      fontSize: '12px',
                      fontWeight: 700,
                      padding: '0 14px',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    Apply
                  </button>
                </form>
              )}
            </div>

            {/* Calculations */}
            <div className="auriva-cart-summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            {discountAmount > 0 && (
              <div className="auriva-cart-summary-row" style={{ color: 'var(--auriva-accent-green)', fontWeight: 700 }}>
                <span>Coupon Discount (10%)</span>
                <span>-₹{discountAmount}</span>
              </div>
            )}

            <div className="auriva-cart-summary-row">
              <span>Delivery Fee</span>
              <span>{shippingFee === 0 ? <strong style={{ color: 'var(--auriva-accent-green)' }}>FREE</strong> : `₹${shippingFee}`}</span>
            </div>

            <div className="auriva-cart-summary-row total">
              <span>Total Payable</span>
              <span>₹{finalTotal}</span>
            </div>

            <button
              onClick={handleProceedCheckout}
              className="auriva-checkout-btn"
              aria-label="Proceed to checkout"
            >
              <span>PROCEED TO CHECKOUT • ₹{finalTotal}</span>
              <ArrowRight size={17} strokeWidth={2.5} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
