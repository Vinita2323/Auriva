import React from 'react';
import {
  Leaf,
  ShieldCheck,
  Heart,
  Sparkles,
  ArrowRight,
  Sprout,
  Users,
  Play,
  Award,
  Globe,
  User,
  CheckCircle2,
  Clock,
  Droplets
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import heroBowlImg from '../../../assets/about_hero_bowl.jpg';
import harvestLotusImg from '../../../assets/about_harvest_lotus.jpg';
import whyChoosePouchesImg from '../../../assets/about_why_choose_pouches.jpg';
import ctaBowlImg from '../../../assets/about_cta_bowl.jpg';

export default function AboutPage() {
  const { navigateTo } = useCart();

  return (
    <div className="auriva-about-page-wrapper">
      <div className="auriva-container">
        
        {/* =========================================================================
            SECTION 1: HERO SECTION (OUR HERITAGE & MISSION)
            ========================================================================= */}
        <section className="auriva-about-hero-section">
          <div className="auriva-about-hero-left">
            <div className="auriva-about-tag">
              <span>OUR HERITAGE & MISSION</span>
            </div>
            <div className="auriva-about-tag-flourish">🪷</div>

            <h1 className="auriva-about-hero-title">
              Nourishing Naturally,<br />
              <span className="auriva-about-title-italic">From Soil to Soul</span>
            </h1>

            <p className="auriva-about-hero-subtitle">
              Aurivá was born out of a relentless passion to transform everyday snacking into a ritual of vitality, purity, and mindful indulgence.
            </p>

            {/* 4 Value Badges in a Row */}
            <div className="auriva-about-values-row">
              <div className="auriva-about-val-badge">
                <div className="auriva-val-icon-wrap">
                  <Sprout size={16} />
                </div>
                <span>Rooted in Tradition</span>
              </div>

              <div className="auriva-about-val-badge">
                <div className="auriva-val-icon-wrap">
                  <Heart size={16} />
                </div>
                <span>Naturally Wholesome</span>
              </div>

              <div className="auriva-about-val-badge">
                <div className="auriva-val-icon-wrap">
                  <Globe size={16} />
                </div>
                <span>Sustainably Sourced</span>
              </div>

              <div className="auriva-about-val-badge">
                <div className="auriva-val-icon-wrap">
                  <User size={16} />
                </div>
                <span>Made with Purpose</span>
              </div>
            </div>
          </div>

          <div className="auriva-about-hero-right">
            <div className="auriva-about-hero-img-wrap">
              {/* 100% Natural Seal Badge */}
              <div className="auriva-about-seal-badge">
                <div className="auriva-about-seal-inner">
                  <span className="auriva-seal-pct">100%</span>
                  <span className="auriva-seal-txt">NATURAL</span>
                  <Leaf size={11} className="auriva-seal-leaf-icon" />
                </div>
              </div>

              <img
                src={heroBowlImg}
                alt="Aurivá Roasted Makhana Bowl"
                className="auriva-about-hero-img"
              />
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: THE ROOT OF OUR CRAFT (HARVEST & SOURCING SHOWCASE)
            ========================================================================= */}
        <section className="auriva-about-harvest-card">
          <div className="auriva-about-harvest-visual">
            <img
              src={harvestLotusImg}
              alt="Lotus harvest in Bihar"
              className="auriva-about-harvest-img"
            />
            <div className="auriva-about-play-btn" title="Watch Our Farm Story">
              <Play size={20} fill="#D4A359" color="#D4A359" style={{ marginLeft: '3px' }} />
            </div>
          </div>

          <div className="auriva-about-harvest-content">
            <div className="auriva-harvest-tag">
              THE ROOT OF OUR CRAFT
            </div>

            <h2 className="auriva-harvest-title">
              Handpicked Harvests from India's Richest Soils
            </h2>

            <p className="auriva-harvest-desc">
              We partner directly with certified smallholder farmers in Bihar and Jammu & Kashmir who harvest lotus seeds and jumbo dry fruits through traditional, sustainable methods passed down through generations.
            </p>

            <p className="auriva-harvest-desc">
              Every batch is lab-tested for heavy metals, pesticides, and aflatoxins before undergoing low-roasting in cold-pressed extra virgin oils.
            </p>

            {/* 3 Provenance Mini Cards */}
            <div className="auriva-harvest-provenance-row">
              <div className="auriva-provenance-card">
                <div className="auriva-prov-icon">
                  <Sprout size={16} color="#143826" />
                </div>
                <div>
                  <strong>Sourced from</strong>
                  <span>Bihar & Kashmir</span>
                </div>
              </div>

              <div className="auriva-provenance-card">
                <div className="auriva-prov-icon">
                  <ShieldCheck size={16} color="#143826" />
                </div>
                <div>
                  <strong>Lab Tested for</strong>
                  <span>Purity & Safety</span>
                </div>
              </div>

              <div className="auriva-provenance-card">
                <div className="auriva-prov-icon">
                  <Clock size={16} color="#143826" />
                </div>
                <div>
                  <strong>Traditional Methods</strong>
                  <span>Sustainably Followed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: THE 4 QUALITY PILLARS
            ========================================================================= */}
        <section className="auriva-about-pillars-section">
          <div className="auriva-pillars-header">
            <h2 className="auriva-pillars-title">
              The 4 Aurivá Quality Pillars
            </h2>
            <div className="auriva-about-tag-flourish">🪷</div>
          </div>

          <div className="auriva-pillars-grid">
            <div className="auriva-pillar-card">
              <div className="auriva-pillar-icon-circle">
                <Sprout size={24} color="#143826" />
              </div>
              <h3 className="auriva-pillar-name">100% Roasted</h3>
              <p className="auriva-pillar-desc">
                Never deep-fried, just pure & slow roasted to preserve nutrients, flavour and phytonutrients.
              </p>
            </div>

            <div className="auriva-pillar-card">
              <div className="auriva-pillar-icon-circle">
                <Leaf size={24} color="#143826" />
              </div>
              <h3 className="auriva-pillar-name">Zero Chemical Preservatives</h3>
              <p className="auriva-pillar-desc">
                No artificial colors, MSG, TBHQ or synthetic chemicals. Only real ingredients, ground spices and love.
              </p>
            </div>

            <div className="auriva-pillar-card">
              <div className="auriva-pillar-icon-circle">
                <ShieldCheck size={24} color="#143826" />
              </div>
              <h3 className="auriva-pillar-name">Hygienically Nitrogen-Flushed</h3>
              <p className="auriva-pillar-desc">
                Multi-layer food-grade barrier pouches that lock in crunch, freshness and taste.
              </p>
            </div>

            <div className="auriva-pillar-card">
              <div className="auriva-pillar-icon-circle">
                <Users size={24} color="#143826" />
              </div>
              <h3 className="auriva-pillar-name">Community First</h3>
              <p className="auriva-pillar-desc">
                Fair-trade pricing and rural employment generation for stronger communities and a stronger snacking culture.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: WHY CHOOSE AURIVÁ? (DARK FOREST GREEN SHOWCASE)
            ========================================================================= */}
        <section className="auriva-about-why-choose-card">
          <div className="auriva-why-choose-left">
            <h2 className="auriva-why-choose-title">
              Why Choose Aurivá? <span className="auriva-leaf-accent">🍃</span>
            </h2>

            <p className="auriva-why-choose-desc">
              We believe healthy snacking should never come at the cost of taste. Aurivá brings you the perfect balance of nutrition, flavour, and trust.
            </p>

            {/* 4 Feature Icons Row */}
            <div className="auriva-why-choose-features-row">
              <div className="auriva-why-feature-item">
                <div className="auriva-why-icon-bubble">
                  <Droplets size={20} />
                </div>
                <span>Clean<br />Ingredients</span>
              </div>

              <div className="auriva-why-feature-item">
                <div className="auriva-why-icon-bubble">
                  <Sprout size={20} />
                </div>
                <span>Crunchy<br />& Delicious</span>
              </div>

              <div className="auriva-why-feature-item">
                <div className="auriva-why-icon-bubble">
                  <Sparkles size={20} />
                </div>
                <span>Wholesome<br />Nutrition</span>
              </div>

              <div className="auriva-why-feature-item">
                <div className="auriva-why-icon-bubble">
                  <ShieldCheck size={20} />
                </div>
                <span>Trust in<br />Every Bite</span>
              </div>
            </div>
          </div>

          <div className="auriva-why-choose-right">
            <img
              src={whyChoosePouchesImg}
              alt="Aurivá Classic & Cheese Makhana Pouches"
              className="auriva-why-choose-img"
            />
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: READY TO EXPERIENCE TRUE WHOLESOMENESS? (CTA BAR)
            ========================================================================= */}
        <section className="auriva-about-cta-bar">
          <div className="auriva-about-cta-left">
            <img
              src={ctaBowlImg}
              alt="Roasted Makhana Bowl"
              className="auriva-about-cta-img"
            />
          </div>

          <div className="auriva-about-cta-center">
            <h3 className="auriva-about-cta-title">
              Ready to Experience True Wholesomeness?
            </h3>
            <p className="auriva-about-cta-desc">
              Join thousands of health-conscious families who choose Aurivá for their daily nutritional joy.
            </p>
          </div>

          <div className="auriva-about-cta-right">
            <button
              onClick={() => navigateTo('shop', 'all')}
              className="auriva-about-cta-btn"
            >
              <span>SHOP NOW</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
