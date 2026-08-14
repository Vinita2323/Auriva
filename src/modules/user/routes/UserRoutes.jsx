import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import TopBar from '../components/Header/TopBar';
import Navbar from '../components/Header/Navbar';
import MobileHeader from '../components/Header/MobileHeader';
import BottomNavBar from '../components/Navigation/BottomNavBar';
import Footer from '../components/Footer/Footer';
import CartDrawer from '../components/Modals/CartDrawer';
import ProductQuickViewModal from '../components/Modals/ProductQuickViewModal';
import SearchModal from '../components/Modals/SearchModal';
import CheckoutModal from '../components/Modals/CheckoutModal';

import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import AboutPage from '../pages/AboutPage';
import WishlistPage from '../pages/WishlistPage';
import ProductDetailPage from '../pages/ProductDetailPage';

import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

export default function UserRoutes() {
  const { toast } = useCart();

  return (
    <div className="auriva-app-container">
      {/* 1. Desktop Announcement Bar */}
      <TopBar />

      {/* 2. Desktop Navigation Bar */}
      <Navbar />

      {/* 3. Mobile Header Bar */}
      <MobileHeader />

      {/* 4. Active Page Content with React Router */}
      <main className="auriva-main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/all-snacks" element={<ShopPage defaultCategory="all" />} />
          <Route path="/shop" element={<ShopPage defaultCategory="all" />} />
          <Route path="/bestsellers" element={<ShopPage defaultCategory="bestsellers" />} />
          <Route path="/best-sellers" element={<Navigate to="/bestsellers" replace />} />
          <Route path="/combos" element={<ShopPage defaultCategory="makhana-combos" />} />
          <Route path="/makhana-combos" element={<Navigate to="/combos" replace />} />
          <Route path="/category/:categorySlug" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* 5. Rich E-Commerce Footer */}
      <Footer />

      {/* 6. Sticky Mobile App Bottom Navigation Bar */}
      <BottomNavBar />

      {/* 7. Drawers and Modals */}
      <CartDrawer />
      <ProductQuickViewModal />
      <SearchModal />
      <CheckoutModal />

      {/* 8. Global Toast Notification */}
      {toast && (
        <div className="auriva-toast">
          {toast.type === 'error' ? (
            <AlertCircle size={18} color="#FF6B6B" />
          ) : toast.type === 'info' ? (
            <Info size={18} color="#D4A359" />
          ) : (
            <CheckCircle2 size={18} color="#4ADE80" />
          )}
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
}
