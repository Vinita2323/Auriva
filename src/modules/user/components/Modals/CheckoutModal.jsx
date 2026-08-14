import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Truck, CreditCard, Smartphone, Banknote, ArrowRight, Package } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../../context/CartContext';

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cartItems,
    subtotal,
    discountAmount,
    shippingFee,
    finalTotal,
    appliedPromo,
    clearCart,
    navigateTo
  } = useCart();

  const [step, setStep] = useState('form'); // 'form' | 'success'
  const [orderId, setOrderId] = useState('');
  const [formData, setFormData] = useState({
    name: 'Priya Sharma',
    phone: '9876543210',
    email: 'priya.sharma@example.com',
    address: 'Flat 402, Green Glen Palms, Bellandur',
    pincode: '560103',
    city: 'Bengaluru',
    state: 'Karnataka',
    paymentMethod: 'upi'
  });

  if (!isCheckoutOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const newOrderId = `AUR-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newOrderId);

    // Fire celebratory confetti!
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // safe fallback
    }

    setStep('success');
    clearCart();
  };

  const handleFinish = () => {
    setIsCheckoutOpen(false);
    setStep('form');
    navigateTo('home');
  };

  return (
    <div className="auriva-modal-overlay" onClick={() => setIsCheckoutOpen(false)}>
      <div
        className="auriva-modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '650px', padding: '30px' }}
      >
        <button
          onClick={() => setIsCheckoutOpen(false)}
          className="auriva-modal-close-btn"
          aria-label="Close checkout"
        >
          <X size={18} />
        </button>

        {step === 'form' ? (
          <div>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <ShieldCheck size={22} color="var(--auriva-primary)" />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: 'var(--auriva-primary)' }}>
                  Express Checkout
                </h3>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--auriva-text-muted)' }}>
                100% Encrypted & Secure 256-Bit Pan-India Delivery
              </p>
            </div>

            <form onSubmit={handlePlaceOrder}>
              {/* Shipping Details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--auriva-primary)', display: 'block', marginBottom: '4px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--auriva-cream-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--auriva-primary)', display: 'block', marginBottom: '4px' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--auriva-cream-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--auriva-primary)', display: 'block', marginBottom: '4px' }}>
                  Delivery Address *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House/Flat No, Apartment, Street name"
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--auriva-cream-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--auriva-primary)', display: 'block', marginBottom: '4px' }}>
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    value={formData.pincode}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--auriva-cream-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--auriva-primary)', display: 'block', marginBottom: '4px' }}>
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--auriva-cream-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--auriva-primary)', display: 'block', marginBottom: '4px' }}>
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--auriva-cream-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }}
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '12px', fontWeight: 700, color: 'var(--auriva-primary)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  Select Payment Method:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  <div
                    onClick={() => setFormData(p => ({ ...p, paymentMethod: 'upi' }))}
                    style={{
                      border: `1.5px solid ${formData.paymentMethod === 'upi' ? 'var(--auriva-primary)' : 'var(--auriva-cream-border)'}`,
                      backgroundColor: formData.paymentMethod === 'upi' ? 'var(--auriva-primary-subtle)' : '#FFFFFF',
                      padding: '12px 10px',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      textAlign: 'center',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--auriva-primary)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Smartphone size={18} />
                    <span>Instant UPI</span>
                  </div>

                  <div
                    onClick={() => setFormData(p => ({ ...p, paymentMethod: 'card' }))}
                    style={{
                      border: `1.5px solid ${formData.paymentMethod === 'card' ? 'var(--auriva-primary)' : 'var(--auriva-cream-border)'}`,
                      backgroundColor: formData.paymentMethod === 'card' ? 'var(--auriva-primary-subtle)' : '#FFFFFF',
                      padding: '12px 10px',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      textAlign: 'center',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--auriva-primary)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <CreditCard size={18} />
                    <span>Card / NetBanking</span>
                  </div>

                  <div
                    onClick={() => setFormData(p => ({ ...p, paymentMethod: 'cod' }))}
                    style={{
                      border: `1.5px solid ${formData.paymentMethod === 'cod' ? 'var(--auriva-primary)' : 'var(--auriva-cream-border)'}`,
                      backgroundColor: formData.paymentMethod === 'cod' ? 'var(--auriva-primary-subtle)' : '#FFFFFF',
                      padding: '12px 10px',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      textAlign: 'center',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--auriva-primary)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Banknote size={18} />
                    <span>Cash on Delivery</span>
                  </div>
                </div>
              </div>

              {/* Order total summary */}
              <div style={{ backgroundColor: '#FAF8F5', padding: '14px 18px', borderRadius: 'var(--radius-sm)', marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                  <span>Items Total ({cartItems.length})</span>
                  <span>₹{subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--auriva-accent-green)', fontWeight: 700, marginBottom: '4px' }}>
                    <span>Coupon ({appliedPromo?.code})</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '8px' }}>
                  <span>Shipping</span>
                  <span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 800, color: 'var(--auriva-primary)', paddingTop: '6px', borderTop: '1px solid var(--auriva-cream-border)' }}>
                  <span>Grand Total</span>
                  <span>₹{finalTotal}</span>
                </div>
              </div>

              <button
                type="submit"
                className="auriva-checkout-btn"
                style={{ marginTop: 0 }}
              >
                <span>PLACE ORDER • ₹{finalTotal}</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        ) : (
          /* Order Confirmation Screen */
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: '#E8F5E9', color: 'var(--auriva-accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <CheckCircle size={42} />
            </div>

            <span className="auriva-section-pill-tag">ORDER CONFIRMED</span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: 'var(--auriva-primary)', marginBottom: '8px' }}>
              Thank you, {formData.name}!
            </h3>

            <p style={{ fontSize: '14.5px', color: 'var(--auriva-text-body)', marginBottom: '16px', maxWidth: '420px', margin: '0 auto 16px' }}>
              Your wholesome goodness is on its way. An SMS with tracking details has been sent to <strong>+91 {formData.phone}</strong>.
            </p>

            <div style={{ backgroundColor: '#FAF8F5', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--auriva-cream-border)', maxWidth: '420px', margin: '0 auto 24px', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                <span style={{ color: 'var(--auriva-text-muted)' }}>Order ID:</span>
                <strong style={{ color: 'var(--auriva-primary)', fontFamily: 'monospace', fontSize: '14px' }}>{orderId}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                <span style={{ color: 'var(--auriva-text-muted)' }}>Amount Paid:</span>
                <strong style={{ color: 'var(--auriva-primary)' }}>₹{finalTotal} ({formData.paymentMethod.toUpperCase()})</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'var(--auriva-text-muted)' }}>Estimated Delivery:</span>
                <strong style={{ color: 'var(--auriva-accent-green)' }}>Within 2-3 Business Days</strong>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="auriva-btn-gold"
            >
              <span>CONTINUE SHOPPING</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
