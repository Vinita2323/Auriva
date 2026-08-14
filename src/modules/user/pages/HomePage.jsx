import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import CategorySection from '../components/Categories/CategorySection';
import BestSellersSection from '../components/Products/BestSellersSection';
import NatureStorySection from '../components/Story/NatureStorySection';
import SnackBoxBuilder from '../components/BoxBuilder/SnackBoxBuilder';
import TestimonialsSection from '../components/Reviews/TestimonialsSection';

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero Showcase Section */}
      <HeroSection />

      {/* 2. Shop By Category */}
      <CategorySection />

      {/* 3. Best Sellers Showcase */}
      <BestSellersSection />

      {/* 4. From Nature to Your Table Story */}
      <NatureStorySection />

      {/* 5. Custom Box Builder & 10% Welcome Coupon */}
      <SnackBoxBuilder />

      {/* 6. Customer Testimonials */}
      <TestimonialsSection />
    </main>
  );
}
