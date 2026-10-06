import React, { useState } from 'react';
import { Sliders, GitCompare, CheckCircle2, ShieldCheck, Sparkles, Zap, ArrowRight, Laptop, Smartphone, Headphones, Tv } from 'lucide-react';
import './SmartFeatures.css';

const SmartFeatures = () => {
  const [activeTab, setActiveTab] = useState('finder');

  // Smart Product Finder State
  const [category, setCategory] = useState('smartphones');
  const [budget, setBudget] = useState('500-1000');
  const [priority, setPriority] = useState('battery');

  // Compatibility Checker State
  const [device, setDevice] = useState('iphone15');
  const [accessory, setAccessory] = useState('magsafe-charger');

  const getRecommendation = () => {
    if (category === 'smartphones') {
      return {
        title: 'Pulse Pro 5G Flagship',
        match: '98% Match',
        desc: 'Ideal for power users looking for all-day battery performance, 200MP camera, and fast 120W charging.',
        price: '$899'
      };
    } else if (category === 'laptops') {
      return {
        title: 'Gadgetra UltraBook Titanium X1',
        match: '96% Match',
        desc: 'Ultra-lightweight rig built for multitasking, creative rendering, and 18h continuous productivity.',
        price: '$1299'
      };
    } else if (category === 'audio') {
      return {
        title: 'SonicWave Studio Pro ANC',
        match: '99% Match',
        desc: 'Studio-grade acoustics with active noise canceling and ultra-soft memory foam cushions.',
        price: '$249'
      };
    } else {
      return {
        title: 'Vision 4K OLED Smart Hub',
        match: '95% Match',
        desc: 'Smart home central display with quantum color reproduction and low latency gaming support.',
        price: '$1149'
      };
    }
  };

  const recommendation = getRecommendation();

  return (
    <section className="smart-features-section" id="smart-features">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Intelligent Commerce</span>
          <h2 className="section-title">Smart Shopping Suite</h2>
          <p className="section-subtitle">
            Leverage our interactive diagnostic tools to find the perfect gear, check device compatibility, compare specifications, and enjoy backed warranty support.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="smart-tabs-nav">
          <button
            className={`smart-tab-btn ${activeTab === 'finder' ? 'active' : ''}`}
            onClick={() => setActiveTab('finder')}
          >
            <Sliders size={18} />
            <span>Smart Product Finder</span>
          </button>
          <button
            className={`smart-tab-btn ${activeTab === 'compare' ? 'active' : ''}`}
            onClick={() => setActiveTab('compare')}
          >
            <GitCompare size={18} />
            <span>Product Comparison</span>
          </button>
          <button
            className={`smart-tab-btn ${activeTab === 'compatibility' ? 'active' : ''}`}
            onClick={() => setActiveTab('compatibility')}
          >
            <CheckCircle2 size={18} />
            <span>Compatibility Checker</span>
          </button>
          <button
            className={`smart-tab-btn ${activeTab === 'warranty' ? 'active' : ''}`}
            onClick={() => setActiveTab('warranty')}
          >
            <ShieldCheck size={18} />
            <span>Warranty & Service</span>
          </button>
        </div>

        {/* Tab 1: Smart Product Finder */}
        {activeTab === 'finder' && (
          <div className="feature-card-wrapper">
            <div className="finder-grid">
              <div className="finder-form">
                <h3><Sparkles size={20} className="icon-cyan" /> Configure Your Ideal Device</h3>
                <p className="form-subtext">Answer 3 quick preferences and let our Smart Finder curate your match.</p>

                <div className="form-group">
                  <label>1. Target Category</label>
                  <div className="radio-group">
                    <button className={category === 'smartphones' ? 'selected' : ''} onClick={() => setCategory('smartphones')}>Smartphones</button>
                    <button className={category === 'laptops' ? 'selected' : ''} onClick={() => setCategory('laptops')}>Laptops</button>
                    <button className={category === 'audio' ? 'selected' : ''} onClick={() => setCategory('audio')}>Audio</button>
                    <button className={category === 'appliances' ? 'selected' : ''} onClick={() => setCategory('appliances')}>Appliances</button>
                  </div>
                </div>

                <div className="form-group">
                  <label>2. Budget Bracket</label>
                  <select value={budget} onChange={(e) => setBudget(e.target.value)} className="select-input">
                    <option value="under-300">Under $300</option>
                    <option value="300-800">$300 - $800</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="above-1000">$1,000+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>3. Top Priority</label>
                  <div className="radio-group">
                    <button className={priority === 'battery' ? 'selected' : ''} onClick={() => setPriority('battery')}>Long Battery</button>
                    <button className={priority === 'performance' ? 'selected' : ''} onClick={() => setPriority('performance')}>High Performance</button>
                    <button className={priority === 'camera' ? 'selected' : ''} onClick={() => setPriority('camera')}>Best Display/Camera</button>
                  </div>
                </div>
              </div>

              <div className="finder-result">
                <div className="match-pill">{recommendation.match}</div>
                <span className="result-label">Recommended Gadget Match</span>
                <h4 className="result-title">{recommendation.title}</h4>
                <p className="result-desc">{recommendation.desc}</p>
                <div className="result-price-row">
                  <span className="price-tag">{recommendation.price}</span>
                  <a href="#products" className="btn-primary-sm">
                    View Product Details <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Product Comparison */}
        {activeTab === 'compare' && (
          <div className="feature-card-wrapper">
            <h3 className="section-subtitle-inner">Flagship Models Comparison</h3>
            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Key Feature</th>
                    <th>UltraBook Titanium X1</th>
                    <th>Pulse Pro 5G Phone</th>
                    <th>SonicWave Studio Pro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Display</strong></td>
                    <td>14" 3K OLED (120Hz)</td>
                    <td>6.7" AMOLED (120Hz)</td>
                    <td>Hi-Res Dynamic Driver</td>
                  </tr>
                  <tr>
                    <td><strong>Processor / Chip</strong></td>
                    <td>M3 Pro Equivalent 12-Core</td>
                    <td>Snapdragon 8 Gen 3</td>
                    <td>Dual DSP Audio Engine</td>
                  </tr>
                  <tr>
                    <td><strong>Battery & Charging</strong></td>
                    <td>18 Hours (100W Fast Charge)</td>
                    <td>5000mAh (120W Super Charge)</td>
                    <td>60 Hours (Fast Charge 10min=5h)</td>
                  </tr>
                  <tr>
                    <td><strong>Special Tech</strong></td>
                    <td>AI Thermal Cooling</td>
                    <td>200MP Quad Camera System</td>
                    <td>45dB Hybrid ANC</td>
                  </tr>
                  <tr>
                    <td><strong>Price</strong></td>
                    <td><span className="price-highlight">$1,299</span></td>
                    <td><span className="price-highlight">$899</span></td>
                    <td><span className="price-highlight">$249</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Compatibility Checker */}
        {activeTab === 'compatibility' && (
          <div className="feature-card-wrapper text-center">
            <h3>Instant Hardware & Accessories Compatibility</h3>
            <p className="sub-text">Check if your device works seamlessly with Gadgetra fast chargers and wireless accessories.</p>

            <div className="compat-selectors">
              <div className="compat-box">
                <label>Your Host Device</label>
                <select value={device} onChange={(e) => setDevice(e.target.value)} className="select-input">
                  <option value="iphone15">Apple iPhone 15 / 15 Pro (USB-C)</option>
                  <option value="galaxyS24">Samsung Galaxy S24 Ultra</option>
                  <option value="macbook">MacBook Pro / Air M-Series</option>
                  <option value="windows">Windows Thunderbolt 4 Laptop</option>
                </select>
              </div>

              <div className="compat-status">
                <CheckCircle2 size={32} color="#10b981" />
                <span className="compat-text">100% Verified Compatible</span>
              </div>

              <div className="compat-box">
                <label>Gadgetra Accessory</label>
                <select value={accessory} onChange={(e) => setAccessory(e.target.value)} className="select-input">
                  <option value="magsafe-charger">140W GaN Fast Charger</option>
                  <option value="anc-headphones">SonicWave ANC Headphones</option>
                  <option value="thunderbolt-hub">11-in-1 Thunderbolt Dock</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Warranty & Service */}
        {activeTab === 'warranty' && (
          <div className="feature-card-wrapper">
            <div className="warranty-grid">
              <div className="warranty-card">
                <ShieldCheck size={32} className="icon-cyan" />
                <h4>2-Year Full Protection</h4>
                <p>All Gadgetra devices include official manufacturer backed coverage for hardware defects and battery health guarantee.</p>
              </div>
              <div className="warranty-card">
                <Zap size={32} className="icon-violet" />
                <h4>Fast Express Swap</h4>
                <p>Encounter an issue? Request immediate hardware replacement with hassle-free door step pickup within 48 hours.</p>
              </div>
              <div className="warranty-card">
                <CheckCircle2 size={32} className="icon-emerald" />
                <h4>Lifetime Firmware Updates</h4>
                <p>Enjoy over-the-air performance upgrades, security patches, and app optimizations throughout your product lifecycle.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SmartFeatures;
