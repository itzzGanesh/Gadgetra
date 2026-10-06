import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, ShieldCheck, Truck, Zap, Tag, Star, ShoppingCart } from 'lucide-react';
import './Hero.css';

const slidesData = [
  {
    id: 1,
    category: 'Diwali & Festival Dhamaka',
    badge: '🪔 Grand Festival Sale 2026',
    badgeIcon: Sparkles,
    title: 'Diwali & Festival Mega Electronics Sale',
    description: 'Celebrate Diwali & Festival season with up to 45% OFF on 5G Smartphones, Smartwatches, 4K TVs, and Smart Home Appliances!',
    highlightText: '🔥 Use Code: FESTIVE50 for Flat ₹5,000 Instant Cashbacks',
    ctaText: 'Explore Festival Deals',
    ctaLink: '#deals',
    secondaryCta: 'View Special Offers',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80',
    productCard: {
      name: 'Pulse Pro 5G Festive Bundle',
      specs: '200MP Camera • FREE Earbuds Included',
      price: '$799',
      originalPrice: '$1,099',
      discount: '27% OFF',
      rating: 4.9
    }
  },
  {
    id: 2,
    category: 'Pongal & Harvest Special',
    badge: '🌾 Pongal Festive Offers',
    badgeIcon: Zap,
    title: 'Pongal Special Laptops & Workstations',
    description: 'Upgrade your tech workspace this festive season! High-performance gaming laptops & ultrabooks with free festival accessory kits.',
    highlightText: '🎁 Free Wireless Gaming Mouse + Headphones Bundle',
    ctaText: 'Shop Pongal Offers',
    ctaLink: '#products',
    secondaryCta: 'View Laptop Specs',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=80',
    productCard: {
      name: 'Titanium X1 Festive Edition',
      specs: '32GB RAM • 1TB SSD • Free Backpack',
      price: '$1,199',
      originalPrice: '$1,499',
      discount: '20% OFF',
      rating: 5.0
    }
  },
  {
    id: 3,
    category: 'Home Appliances & Festive Living',
    badge: '✨ Grand New Year & Festival Savings',
    badgeIcon: ShieldCheck,
    title: 'Festival Smart Home & Appliance Offers',
    description: 'Transform your home for the festivities with Smart 4K OLED TVs, Robotic Vacuums, AI Air Purifiers, and Inverter Refrigerators.',
    highlightText: '⚡ Extra 10% Instant Bank Discount on Credit Cards',
    ctaText: 'Shop Appliances',
    ctaLink: '#products',
    secondaryCta: 'Festival Guide',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1000&q=80',
    productCard: {
      name: 'Vision 4K OLED Festive TV 55"',
      specs: 'Dolby Vision • 3 Yrs Extended Warranty',
      price: '$999',
      originalPrice: '$1,399',
      discount: '28% OFF',
      rating: 4.9
    }
  },
  {
    id: 4,
    category: 'Audio & Music Fest',
    badge: '🎧 Festival Beat Binge',
    badgeIcon: Sparkles,
    title: 'Festive Sound & ANC Headphones Bonanza',
    description: 'Immerse in festive celebration tunes with studio-grade spatial audio, hybrid ANC, and massive price drops on premium earbuds & soundbars.',
    highlightText: 'Complimentary Festival Carry Case + 2 Yrs Warranty',
    ctaText: 'Explore Audio Deals',
    ctaLink: '#products',
    secondaryCta: 'Listen Demo',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80',
    productCard: {
      name: 'SonicWave Studio Pro ANC',
      specs: 'Hybrid ANC • 60h Playtime',
      price: '$199',
      originalPrice: '$329',
      discount: '40% OFF',
      rating: 4.9
    }
  },
  {
    id: 5,
    category: 'Mega Clearance & Doorbuster',
    badge: '💥 Festival Doorbuster Sale',
    badgeIcon: Tag,
    title: 'Limited Stock Festive Flash Price Drops',
    description: 'Lowest prices of the year on GaN Fast Chargers, Power Banks, Smartwatches, and Gaming accessories during our Festive Grand Sale!',
    highlightText: '🔥 Use Code: GADGET15 for Extra 15% OFF',
    ctaText: 'Grab Deals Now',
    ctaLink: '#deals',
    secondaryCta: 'View All Deals',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1000&q=80',
    productCard: {
      name: 'GaN 140W Fast Charger',
      specs: 'Multi-Port USB-C • GaN V Tech',
      price: '$59',
      originalPrice: '$119',
      discount: '50% OFF',
      rating: 4.9
    }
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate every 3 seconds continuously
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  return (
    <section className="hero-carousel-section" id="home">
      <div className="hero-slider-wrapper">
        {slidesData.map((slide, index) => {
          const SlideBadgeIcon = slide.badgeIcon;
          const isActive = index === currentSlide;

          return (
            <div 
              key={slide.id} 
              className={`hero-slide ${isActive ? 'active' : ''}`}
            >
              <div className="container hero-slide-container">
                {/* Left Column - Content */}
                <div className="hero-slide-content">
                  <div className="hero-top-meta">
                    <span className="hero-category-tag">{slide.category}</span>
                    <div className="hero-badge">
                      <SlideBadgeIcon size={14} className="badge-icon" />
                      <span>{slide.badge}</span>
                    </div>
                  </div>

                  <h1 className="hero-main-title">{slide.title}</h1>
                  
                  <p className="hero-slide-desc">{slide.description}</p>

                  <div className="hero-promo-highlight">
                    <Zap size={16} className="highlight-icon" />
                    <span>{slide.highlightText}</span>
                  </div>

                  <div className="hero-actions-row">
                    <a href={slide.ctaLink} className="btn-hero-primary">
                      {slide.ctaText} <ArrowRight size={18} />
                    </a>
                    <a href="#smart-features" className="btn-hero-secondary">
                      {slide.secondaryCta}
                    </a>
                  </div>

                  {/* Value Props */}
                  <div className="hero-trust-bar">
                    <div className="trust-item">
                      <Truck size={16} className="trust-icon" />
                      <span>Free Express Shipping</span>
                    </div>
                    <div className="trust-item">
                      <ShieldCheck size={16} className="trust-icon" />
                      <span>Official 2-Yr Warranty</span>
                    </div>
                    <div className="trust-item">
                      <Zap size={16} className="trust-icon" />
                      <span>Instant Dispatch</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Visual Card */}
                <div className="hero-slide-visual">
                  <div className="hero-image-card">
                    <div className="hero-img-container">
                      <img 
                        src={slide.image} 
                        alt={slide.title} 
                        className="hero-img" 
                      />
                      <span className="hero-discount-chip">{slide.productCard.discount}</span>
                    </div>

                    <div className="hero-product-info-box">
                      <div className="info-left">
                        <div className="info-rating">
                          <Star size={13} fill="#f59e0b" color="#f59e0b" />
                          <span>{slide.productCard.rating} Score</span>
                        </div>
                        <h3 className="info-title">{slide.productCard.name}</h3>
                        <p className="info-specs">{slide.productCard.specs}</p>
                      </div>

                      <div className="info-right">
                        <span className="info-old-price">{slide.productCard.originalPrice}</span>
                        <span className="info-price">{slide.productCard.price}</span>
                        <a href="#products" className="info-buy-btn">
                          <ShoppingCart size={14} /> Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Nav Controls */}
      <button 
        className="carousel-nav-btn prev-btn" 
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        className="carousel-nav-btn next-btn" 
        onClick={handleNext}
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicator Dots */}
      <div className="carousel-dots-container">
        {slidesData.map((slide, index) => (
          <button
            key={slide.id}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="dot-progress"></span>
            <span className="dot-label">{slide.category.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
