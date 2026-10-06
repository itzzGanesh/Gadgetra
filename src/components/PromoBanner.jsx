import React from 'react';
import { Zap, ArrowRight, Tag, ShieldAlert } from 'lucide-react';
import './PromoBanner.css';

const PromoBanner = () => {
  return (
    <section className="promo-banner-section">
      <div className="container">
        <div className="promo-banner-card">
          <div className="promo-left">
            <div className="promo-badge">
              <Zap size={16} className="zap-icon" />
              <span>Limited Time Doorbuster Offer</span>
            </div>
            <h2 className="promo-heading">⚡ Flash Sale Live: Save Up to 50% OFF!</h2>
            <p className="promo-sub">
              Exclusive discount on flagship smartphones, studio noise-canceling headphones, and AI home appliances. Use promo code <span className="code-pill">FLASH50</span> at checkout.
            </p>
          </div>

          <div className="promo-right">
            <div className="promo-timer-box">
              <span className="promo-discount-tag">UP TO 50% OFF</span>
              <a href="#deals" className="btn-promo-cta">
                Shop Flash Deals <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
