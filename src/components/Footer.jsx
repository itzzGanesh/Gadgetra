import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Phone, Mail, MapPin, Shield, CreditCard, RefreshCw, Truck, Share2, Globe, MessageSquare, Radio } from 'lucide-react';
import GadgetraLogo from './GadgetraLogo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section" id="contact">
      {/* Value Badges Bar */}
      <div className="footer-top-features">
        <div className="container">
          <div className="features-banner-grid">
            <div className="banner-item">
              <Truck size={28} className="banner-icon" />
              <div>
                <h4>Express Free Shipping</h4>
                <p>On all orders above $99</p>
              </div>
            </div>
            <div className="banner-item">
              <Shield size={28} className="banner-icon" />
              <div>
                <h4>2-Year Full Coverage</h4>
                <p>Official manufacturer warranty</p>
              </div>
            </div>
            <div className="banner-item">
              <RefreshCw size={28} className="banner-icon" />
              <div>
                <h4>30-Day Hassle Returns</h4>
                <p>No questions asked guarantee</p>
              </div>
            </div>
            <div className="banner-item">
              <CreditCard size={28} className="banner-icon" />
              <div>
                <h4>Secure Checkout</h4>
                <p>Encrypted 256-bit SSL safety</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo-link">
              <GadgetraLogo size={34} showText={true} />
            </Link>
            <p className="footer-brand-desc">
              Gadgetra is your premier online destination for next-gen consumer electronics, smart home automation, high-fidelity audio, and high-performance computing gadgets.
            </p>

            <div className="social-links">
              <a href="#community" aria-label="Globe Community" title="Global Community"><Globe size={18} /></a>
              <a href="#share" aria-label="Social Share" title="Share Gadgetra"><Share2 size={18} /></a>
              <a href="#chat" aria-label="Live Chat" title="Live Support Chat"><MessageSquare size={18} /></a>
              <a href="#broadcast" aria-label="Tech Broadcast" title="Tech Broadcast"><Radio size={18} /></a>
            </div>
          </div>

          {/* Top Categories */}
          <div className="footer-col">
            <h4 className="footer-heading">Top Categories</h4>
            <ul className="footer-links">
              <li><Link to="/products?category=mobiles">Smartphones &amp; 5G Phones</Link></li>
              <li><Link to="/products?category=laptops">Gaming Laptops &amp; Ultrabooks</Link></li>
              <li><Link to="/products?category=appliances">AI Home Appliances</Link></li>
              <li><Link to="/products?category=audio">ANC Earbuds &amp; Headphones</Link></li>
              <li><Link to="/products?category=chargers">GaN Chargers &amp; Cables</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="footer-col">
            <h4 className="footer-heading">Customer Care</h4>
            <ul className="footer-links">
              <li><Link to="/orders">Order Tracking</Link></li>
              <li><Link to="/account">Warranty Claim Portal</Link></li>
              <li><Link to="/products">Shipping &amp; Delivery Rates</Link></li>
              <li><Link to="/products">Returns &amp; Exchange Policy</Link></li>
              <li><Link to="/compare">Compatibility Checker</Link></li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="footer-col newsletter-col" id="about">
            <h4 className="footer-heading">Join Gadgetra Insider</h4>
            <p className="newsletter-desc">
              Subscribe to get exclusive tech drop alerts, flash sale promo codes, and insider gadget reviews.
            </p>

            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address..." required />
              <button type="submit" aria-label="Subscribe">
                <Send size={16} />
              </button>
            </form>

            <div className="contact-details">
              <div className="contact-item">
                <Phone size={16} className="contact-icon" />
                <a href="tel:+18005554233">+1 (800) 555-GADGET</a>
              </div>
              <div className="contact-item">
                <Mail size={16} className="contact-icon" />
                <a href="mailto:support@gadgetra.com">support@gadgetra.com</a>
              </div>
              <div className="contact-item">
                <MapPin size={16} className="contact-icon" />
                <span>Tech Valley HQ, San Jose, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>© {new Date().getFullYear()} GADGETRA Electronics Inc. All Rights Reserved.</p>
          <div className="payment-badges">
            <span className="pay-tag">VISA</span>
            <span className="pay-tag">Mastercard</span>
            <span className="pay-tag">Apple Pay</span>
            <span className="pay-tag">PayPal</span>
            <span className="pay-tag">Google Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
