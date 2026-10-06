import React, { useState } from 'react';
import { Star, ShoppingCart, Eye, Heart, Check, X, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import './FeaturedProducts.css';

const productsData = [
  {
    id: 1,
    name: 'Gadgetra UltraBook Titanium X1',
    category: 'Laptops & Computers',
    tab: 'popular',
    price: 1299,
    originalPrice: 1499,
    discount: '13%',
    rating: 4.9,
    reviews: 128,
    badge: 'Hot Deal',
    badgeClass: 'badge-hot',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    specs: 'M3 Pro Equivalent • 32GB RAM • 1TB NVMe SSD',
    description: 'Designed for ultimate productivity and power efficiency. Features a 14-inch 3K OLED Retina display, aerospace-grade titanium chassis, and up to 18 hours of battery life.'
  },
  {
    id: 2,
    name: 'Pulse Pro 5G Smartphone',
    category: 'Smartphones & Gadgets',
    tab: 'bestsellers',
    price: 899,
    originalPrice: 1099,
    discount: '18%',
    rating: 4.8,
    reviews: 245,
    badge: '18% OFF',
    badgeClass: 'badge-sale',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    specs: '200MP Quad Camera • 120Hz AMOLED • 5000mAh',
    description: 'Next-gen flagship smartphone powered by 4nm 5G chipset, 200MP ultra-clear camera sensor with OIS, and 120W superfast charging capacity.'
  },
  {
    id: 3,
    name: 'SonicWave Studio Pro Headphones',
    category: 'Audio',
    tab: 'toprated',
    price: 249,
    originalPrice: 329,
    discount: '24%',
    rating: 5.0,
    reviews: 89,
    badge: 'Top Rated',
    badgeClass: 'badge-new',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80',
    specs: 'Hybrid ANC • 60h Battery • Hi-Res Audio',
    description: 'Immersive studio audio with custom 40mm beryllium drivers, active 45dB hybrid noise cancelation, dynamic spatial head tracking, and cloud-soft ear cushions.'
  },
  {
    id: 4,
    name: 'AeroClean Robotic Vacuum V8',
    category: 'Home Appliances',
    tab: 'new',
    price: 429,
    originalPrice: 549,
    discount: '22%',
    rating: 4.7,
    reviews: 64,
    badge: 'Smart Home',
    badgeClass: 'badge-new',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80',
    specs: 'LiDAR Mapping • Auto Empty Dock • 4000Pa Suction',
    description: 'AI-guided robotic vacuum with self-emptying dustbase, LiDAR 3D spatial mapping, obstacle avoidance system, and mop combo feature.'
  },
  {
    id: 5,
    name: 'TurboCharge 140W GaN Station',
    category: 'Accessories',
    tab: 'bestsellers',
    price: 79,
    originalPrice: 119,
    discount: '33%',
    rating: 4.9,
    reviews: 310,
    badge: 'Best Seller',
    badgeClass: 'badge-hot',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
    specs: '4-Port USB-C • GaN V Fast Tech • Multi-Safety Protection',
    description: 'Ultra-compact 140W fast charger capable of charging 4 power-hungry devices simultaneously including laptops, phones, tablets, and smartwatches.'
  },
  {
    id: 6,
    name: 'Vision 4K OLED Smart TV 55"',
    category: 'Home Appliances',
    tab: 'popular',
    price: 1149,
    originalPrice: 1399,
    discount: '18%',
    rating: 4.8,
    reviews: 92,
    badge: 'Sale',
    badgeClass: 'badge-sale',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
    specs: 'Quantum Dot OLED • Dolby Atmos • 120Hz Gaming',
    description: 'Stunning 4K OLED panel delivering self-lit pixels, infinite contrast ratio, NVIDIA G-Sync support for 120Hz gaming, and built-in Dolby Atmos surround sound.'
  },
  {
    id: 7,
    name: 'FitPulse Ultra Smartwatch',
    category: 'Smartphones & Gadgets',
    tab: 'toprated',
    price: 199,
    originalPrice: 249,
    discount: '20%',
    rating: 4.8,
    reviews: 178,
    badge: 'Popular',
    badgeClass: 'badge-hot',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80',
    specs: 'ECG + SpO2 Monitoring • Sapphire Glass • 14-Day Battery',
    description: 'Advanced fitness smartwatch with continuous heart tracking, ECG sensors, 100+ sport tracking modes, sapphire crystal glass display, and 14-day battery.'
  },
  {
    id: 8,
    name: 'SoundBar 360 Cinema System',
    category: 'Audio',
    tab: 'new',
    price: 349,
    originalPrice: 429,
    discount: '19%',
    rating: 4.9,
    reviews: 53,
    badge: 'New Launch',
    badgeClass: 'badge-new',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80',
    specs: '5.1 Channel Surround • Wireless Subwoofer • HDMI eARC',
    description: 'Transform your home theater experience with 5.1 channel surround sound, dedicated wireless subwoofer, Dolby Digital Plus decoding, and 400W peak audio output.'
  }
];

const FeaturedProducts = ({ onAddToCart }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [addedItems, setAddedItems] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeTab === 'all'
    ? productsData
    : productsData.filter(p => p.tab === activeTab || p.category.toLowerCase().includes(activeTab));

  const handleAdd = (id) => {
    setAddedItems(prev => ({ ...prev, [id]: true }));
    if (onAddToCart) onAddToCart(id);
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <section className="featured-section" id="products">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="section-tag">Handpicked Electronics</span>
            <h2 className="section-title">Trending Products</h2>
            <p className="section-subtitle">
              Explore our highest-rated consumer electronics and exclusive gadgets backed by 2-year warranty.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Products
            </button>
            <button
              className={`tab-btn ${activeTab === 'bestsellers' ? 'active' : ''}`}
              onClick={() => setActiveTab('bestsellers')}
            >
              Best Sellers
            </button>
            <button
              className={`tab-btn ${activeTab === 'toprated' ? 'active' : ''}`}
              onClick={() => setActiveTab('toprated')}
            >
              Top Rated
            </button>
            <button
              className={`tab-btn ${activeTab === 'new' ? 'active' : ''}`}
              onClick={() => setActiveTab('new')}
            >
              New Arrivals
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <div className="product-badges-left">
                  <span className={`product-badge ${product.badgeClass}`}>
                    {product.badge}
                  </span>
                  <span className="discount-tag">-{product.discount}</span>
                </div>

                <button className="wishlist-btn" title="Add to Wishlist">
                  <Heart size={16} />
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />

                <div className="quick-action-overlay">
                  <button 
                    className="quick-view-btn"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <Eye size={16} /> View Details
                  </button>
                </div>
              </div>

              <div className="product-details">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">{product.name}</h3>
                <p className="product-specs">{product.specs}</p>

                {/* Rating */}
                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < Math.floor(product.rating) ? '#f59e0b' : 'none'}
                        color="#f59e0b"
                      />
                    ))}
                  </div>
                  <span className="rating-num">{product.rating}</span>
                  <span className="review-count">({product.reviews} reviews)</span>
                </div>

                {/* Price Row */}
                <div className="product-price-row">
                  <div className="prices">
                    <span className="current-price">${product.price}</span>
                    {product.originalPrice && (
                      <span className="original-price">${product.originalPrice}</span>
                    )}
                  </div>
                </div>

                {/* Action Buttons Row */}
                <div className="product-actions-group">
                  <button
                    className={`add-cart-btn ${addedItems[product.id] ? 'added' : ''}`}
                    onClick={() => handleAdd(product.id)}
                  >
                    {addedItems[product.id] ? (
                      <>
                        <Check size={16} /> Added
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={16} /> Add to Cart
                      </>
                    )}
                  </button>
                  <button
                    className="view-details-btn"
                    onClick={() => setSelectedProduct(product)}
                    title="View Product Details"
                  >
                    <Eye size={16} /> Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product View Details Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>
              <X size={20} />
            </button>
            <div className="modal-grid">
              <div className="modal-image-col">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
                <span className="modal-discount">Save {selectedProduct.discount}</span>
              </div>
              <div className="modal-info-col">
                <span className="modal-category">{selectedProduct.category}</span>
                <h2>{selectedProduct.name}</h2>
                <div className="modal-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span>{selectedProduct.rating} ({selectedProduct.reviews} customer reviews)</span>
                </div>
                <div className="modal-prices">
                  <span className="price-now">${selectedProduct.price}</span>
                  <span className="price-was">${selectedProduct.originalPrice}</span>
                </div>
                <p className="modal-desc">{selectedProduct.description}</p>
                <div className="modal-specs-box">
                  <strong>Specifications:</strong>
                  <p>{selectedProduct.specs}</p>
                </div>

                <div className="modal-perks">
                  <div className="perk-item"><Truck size={16} /> Free Express Delivery</div>
                  <div className="perk-item"><ShieldCheck size={16} /> 2-Year Official Warranty</div>
                  <div className="perk-item"><RefreshCw size={16} /> 30-Day Hassle Returns</div>
                </div>

                <div className="modal-actions">
                  <button
                    className="modal-add-btn"
                    onClick={() => {
                      handleAdd(selectedProduct.id);
                    }}
                  >
                    <ShoppingCart size={18} /> Add to Shopping Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;
