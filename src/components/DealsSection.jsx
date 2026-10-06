import React, { useState, useEffect } from 'react';
import { Flame, Clock, ShoppingCart, ArrowRight, Tag, Percent } from 'lucide-react';
import './DealsSection.css';

const dealProducts = [
  {
    id: 101,
    name: 'Gadgetra Pro Pad 12.9" M-Series',
    category: 'Smartphones & Gadgets',
    price: 699,
    originalPrice: 899,
    discount: '22% OFF',
    soldPercentage: 78,
    itemsLeft: 6,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80',
    tag: 'Limited Stock'
  },
  {
    id: 102,
    name: 'Apex ANC Wireless Studio Earbuds',
    category: 'Audio',
    price: 129,
    originalPrice: 199,
    discount: '35% OFF',
    soldPercentage: 92,
    itemsLeft: 3,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
    tag: 'Almost Sold Out'
  },
  {
    id: 103,
    name: 'Smart Robotic Air Purifier Ultra',
    category: 'Home Appliances',
    price: 299,
    originalPrice: 429,
    discount: '30% OFF',
    soldPercentage: 64,
    itemsLeft: 12,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80',
    tag: 'Doorbuster'
  },
  {
    id: 104,
    name: 'GaN 100W Magnetic Power Bank',
    category: 'Accessories',
    price: 49,
    originalPrice: 79,
    discount: '38% OFF',
    soldPercentage: 85,
    itemsLeft: 8,
    image: 'https://images.unsplash.com/photo-1609592424074-1428c0570b28?auto=format&fit=crop&w=600&q=80',
    tag: 'Flash Price'
  }
];

const DealsSection = ({ onAddToCart }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 11, minutes: 42, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="deals-section" id="deals">
      <div className="container">
        {/* Banner Header */}
        <div className="deals-header-card">
          <div className="deals-title-group">
            <div className="deals-flame-badge">
              <Flame size={20} className="flame-icon" />
              <span>Limited Time Flash Sale</span>
            </div>
            <h2 className="deals-heading">Special Offers & Daily Deals</h2>
            <p className="deals-sub">
              Grab premium electronics at unbelievable discounts. Offers update every 24 hours while supplies last!
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="deals-countdown-box">
            <div className="timer-header">
              <Clock size={16} /> Deals End In:
            </div>
            <div className="timer-units">
              <div className="unit-box">
                <span className="unit-num">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="unit-label">Hours</span>
              </div>
              <span className="unit-sep">:</span>
              <div className="unit-box">
                <span className="unit-num">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="unit-label">Mins</span>
              </div>
              <span className="unit-sep">:</span>
              <div className="unit-box">
                <span className="unit-num">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="unit-label">Secs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Deals Cards Grid */}
        <div className="deals-grid">
          {dealProducts.map((product) => (
            <div key={product.id} className="deal-card">
              <div className="deal-img-wrapper">
                <span className="deal-discount-badge">{product.discount}</span>
                <span className="deal-stock-tag">{product.tag}</span>
                <img src={product.image} alt={product.name} />
              </div>

              <div className="deal-card-body">
                <span className="deal-category">{product.category}</span>
                <h3 className="deal-title">{product.name}</h3>

                <div className="deal-price-row">
                  <span className="deal-now-price">${product.price}</span>
                  <span className="deal-was-price">${product.originalPrice}</span>
                </div>

                {/* Progress bar */}
                <div className="deal-progress-wrapper">
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: `${product.soldPercentage}%` }}></div>
                  </div>
                  <div className="progress-info">
                    <span>Sold: {product.soldPercentage}%</span>
                    <span className="stock-alert">Only {product.itemsLeft} Left!</span>
                  </div>
                </div>

                <button
                  className="deal-add-btn"
                  onClick={() => onAddToCart && onAddToCart(product.id)}
                >
                  <ShoppingCart size={16} /> Claim Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
