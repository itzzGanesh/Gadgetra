import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Heart, Tag, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { products as allProducts } from '../data/products';
import './CategoryProductSlider.css';

/* Promo slide data per category slug */
const categoryPromos = {
  mobiles: {
    title: '🪔 Diwali & Festive 5G Mobile Dhamaka — Up to 40% OFF',
    subtitle: 'Special Diwali cashback vouchers + free festive wireless charger',
    badge: '🪔 Diwali Special Offer',
    code: 'DIWALI50',
    bg: 'linear-gradient(135deg,#1d4ed8 0%,#06b6d4 100%)',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80'
  },
  electronics: {
    title: '🌾 Pongal & New Year Festive Electronics Sale — Extra 20% OFF',
    subtitle: 'Harvest big savings on next-gen tech & gadgets',
    badge: '🌾 Pongal Offer',
    code: 'PONGAL20',
    bg: 'linear-gradient(135deg,#7c3aed 0%,#2563eb 100%)',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=500&q=80'
  },
  laptops: {
    title: '✨ Festive Grand Laptop Bonanza — Flat 25% OFF',
    subtitle: 'Free gaming mouse & laptop backpack with every workstation',
    badge: '💻 Festive Tech Offer',
    code: 'FESTIVE25',
    bg: 'linear-gradient(135deg,#0f172a 0%,#1d4ed8 100%)',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80'
  },
  tvs: {
    title: '🪔 Festive Cinema Sale — 4K OLED Smart TVs Save up to ₹25,000',
    subtitle: 'Bring cinematic festive entertainment home with 3-year warranty',
    badge: '📺 Festive Cinema Offer',
    code: 'DIWALITV',
    bg: 'linear-gradient(135deg,#0e7490 0%,#1d4ed8 100%)',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=500&q=80'
  },
  appliances: {
    title: '🌾 Festival Home Upgrade Sale — Smart Appliances 35% OFF',
    subtitle: 'AI robotic vacuums, smart ACs & purifiers at lowest prices',
    badge: '🏠 Festive Home Offer',
    code: 'PONGALHOME',
    bg: 'linear-gradient(135deg,#059669 0%,#06b6d4 100%)',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80'
  },
  audio: {
    title: '🎧 Festive Music Binge — ANC Headphones & Soundbars 30% OFF',
    subtitle: 'Studio-grade spatial audio with free festival travel case',
    badge: '🎵 Festival Beat Binge',
    code: 'FESTIVEAUDIO',
    bg: 'linear-gradient(135deg,#be185d 0%,#7c3aed 100%)',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80'
  },
  wearables: {
    title: '🪔 Diwali Smartwatch Special — Flat 35% OFF',
    subtitle: 'Track health & stay connected with premium AMOLED wearables',
    badge: '⌚ Festive Smart Offer',
    code: 'DIWALIWATCH',
    bg: 'linear-gradient(135deg,#0f172a 0%,#7c3aed 100%)',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80'
  },
  cameras: {
    title: '📷 Festive Photo & Vlog Gear Sale — Save up to 25%',
    subtitle: 'Capture Diwali & Pongal festival memories in 4K resolution',
    badge: '📷 Festive Pro Offer',
    code: 'FESTIVECAM',
    bg: 'linear-gradient(135deg,#92400e 0%,#1d4ed8 100%)',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80'
  },
  gaming: {
    title: '🎮 Festival Level Up Gaming Sale — 30% OFF Consoles & Gear',
    subtitle: 'Next-gen gaming controllers, headsets & mechanical keyboards',
    badge: '🎮 Festival Gamer Offer',
    code: 'FESTIVEGAME',
    bg: 'linear-gradient(135deg,#16a34a 0%,#0f172a 100%)',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=500&q=80'
  },
  chargers: {
    title: '⚡ Festival Power Charging Bonanza — GaN Fast Chargers 40% OFF',
    subtitle: 'Ultra-fast multi-port chargers with extra braided cable',
    badge: '⚡ Festive Power Offer',
    code: 'FESTIVEPOWER',
    bg: 'linear-gradient(135deg,#b45309 0%,#dc2626 100%)',
    image: 'https://images.unsplash.com/photo-1609592424074-1428c0570b28?auto=format&fit=crop&w=500&q=80'
  },
  'computer-accessories': {
    title: '🖥️ Festive Workspace Accessories — 25% OFF',
    subtitle: 'Ergonomic mice, mechanical keyboards & USB-C hubs',
    badge: '⌨️ Festive Accessories',
    code: 'FESTIVEDESK',
    bg: 'linear-gradient(135deg,#1d4ed8 0%,#0e7490 100%)',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80'
  }
};


/* Default fallback promo */
const defaultPromo = {
  title: 'Exclusive Electronics Deals',
  subtitle: 'Limited period offers — shop now!',
  badge: '🔥 Special Offer',
  code: 'GADGET15',
  bg: 'linear-gradient(135deg,#1d4ed8 0%,#06b6d4 100%)',
  image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=500&q=80'
};

const VISIBLE = 4; // cards visible at once
const AUTO_INTERVAL = 3000; // 3 seconds interval

const CategoryProductSlider = ({ categorySlug, categoryName }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const categoryProducts = allProducts
    .filter(p => p.categorySlug === categorySlug)
    .slice(0, 16);

  const promo = categoryPromos[categorySlug] || defaultPromo;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [promoVisible, setPromoVisible] = useState(true);
  const timerRef = useRef(null);

  const total = categoryProducts.length;
  const maxIdx = Math.max(0, total - VISIBLE);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIdx(prev => {
        const next = prev + 1;
        if (next > maxIdx) {
          // loop: briefly show promo then reset
          setPromoVisible(true);
          setTimeout(() => setPromoVisible(false), 2500);
          return 0;
        }
        return next;
      });
    }, AUTO_INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [maxIdx]);

  const handlePrev = () => {
    setCurrentIdx(prev => Math.max(0, prev - 1));
    startTimer();
  };

  const handleNext = () => {
    setCurrentIdx(prev => Math.min(maxIdx, prev + 1));
    startTimer();
  };

  if (categoryProducts.length === 0) return null;

  const trackOffset = -(currentIdx * (100 / VISIBLE));

  return (
    <div className="cat-slider-section">
      {/* Section Header */}
      <div className="cat-slider-header">
        <div className="cat-slider-title-group">
          <span className="cat-slider-eyebrow">Top Picks</span>
          <h3 className="cat-slider-title">{categoryName} — Featured Products</h3>
        </div>
        <Link
          to={`/products?category=${categorySlug}`}
          className="cat-slider-view-all"
        >
          View All <ChevronRight size={16} />
        </Link>
      </div>

      {/* Promo Strip */}
      {promoVisible && (
        <div className="cat-promo-strip" style={{ background: promo.bg }}>
          <div className="cat-promo-left">
            <span className="cat-promo-badge">{promo.badge}</span>
            <div>
              <h4 className="cat-promo-title">{promo.title}</h4>
              <p className="cat-promo-sub">{promo.subtitle}</p>
            </div>
          </div>
          <div className="cat-promo-right">
            <img src={promo.image} alt="promo" className="cat-promo-img" />
            <div className="cat-promo-code-box">
              <Zap size={14} />
              <span>Use Code: <strong>{promo.code}</strong></span>
            </div>
          </div>
          <button className="cat-promo-close" onClick={() => setPromoVisible(false)}>✕</button>
        </div>
      )}

      {/* Slider */}
      <div className="cat-slider-track-outer">
        <button
          className="cat-slider-nav cat-nav-prev"
          onClick={handlePrev}
          disabled={currentIdx === 0}
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="cat-slider-viewport">
          <div
            className="cat-slider-track"
            style={{ transform: `translateX(${trackOffset}%)` }}
          >
            {categoryProducts.map(product => (
              <div key={product.id} className="cat-product-card">
                <div className="cat-card-img-wrap">
                  {product.discount > 0 && (
                    <span className="cat-card-discount">{product.discount}% OFF</span>
                  )}
                  <button
                    className={`cat-card-wish-btn ${isInWishlist(product.id) ? 'wishlisted' : ''}`}
                    onClick={() => toggleWishlist(product)}
                    aria-label="Wishlist"
                  >
                    <Heart size={15} fill={isInWishlist(product.id) ? '#ef4444' : 'none'} />
                  </button>
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="cat-card-img"
                      loading="lazy"
                    />
                  </Link>
                </div>

                <div className="cat-card-body">
                  <span className="cat-card-brand">{product.brand}</span>
                  <Link to={`/product/${product.id}`} className="cat-card-name">
                    {product.name.length > 40 ? product.name.slice(0, 38) + '…' : product.name}
                  </Link>

                  <div className="cat-card-rating">
                    <Star size={12} fill="#f59e0b" color="#f59e0b" />
                    <span>{product.rating}</span>
                    <span className="cat-card-reviews">({product.reviewCount})</span>
                  </div>

                  <div className="cat-card-price-row">
                    <span className="cat-card-price">₹{product.price.toLocaleString('en-IN')}</span>
                    {product.originalPrice > product.price && (
                      <span className="cat-card-old-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                    )}
                  </div>

                  {product.isBestSeller && (
                    <span className="cat-card-tag best-seller-tag">
                      <Tag size={11} /> Best Seller
                    </span>
                  )}

                  <button
                    className="cat-card-add-btn"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart size={14} /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="cat-slider-nav cat-nav-next"
          onClick={handleNext}
          disabled={currentIdx >= maxIdx}
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="cat-slider-dots">
        {Array.from({ length: maxIdx + 1 }).map((_, i) => (
          <button
            key={i}
            className={`cat-slider-dot ${i === currentIdx ? 'active' : ''}`}
            onClick={() => { setCurrentIdx(i); startTimer(); }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProductSlider;
