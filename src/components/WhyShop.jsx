import React from 'react';
import { ShieldCheck, Lock, Award, RefreshCw } from 'lucide-react';
import './WhyShop.css';

const featuresData = [
  {
    icon: ShieldCheck,
    title: 'Genuine Products',
    description: '100% authentic gadgets directly sourced from official manufacturers with seal of authenticity.',
    color: '#2563eb'
  },
  {
    icon: Lock,
    title: 'Secure Shopping',
    description: 'Encrypted 256-bit SSL transaction safety and complete data privacy protection.',
    color: '#06b6d4'
  },
  {
    icon: Award,
    title: 'Warranty Support',
    description: 'Official 2-year manufacturer coverage with instant dedicated technical customer service.',
    color: '#8b5cf6'
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description: '30-day hassle-free money-back guarantee with complimentary doorstep pickup.',
    color: '#10b981'
  }
];

const WhyShop = () => {
  return (
    <section className="why-shop-section" id="why-us">
      <div className="container">
        <div className="text-center why-shop-header">
          <span className="section-tag">The Gadgetra Advantage</span>
          <h2 className="section-title">Why Shop with Gadgetra</h2>
          <p className="section-subtitle">
            We prioritize customer satisfaction, authentic product guarantee, and reliable tech support every step of the way.
          </p>
        </div>

        <div className="why-shop-grid">
          {featuresData.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div key={index} className="why-card">
                <div className="why-icon-box" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                  <IconComp size={32} />
                </div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyShop;
