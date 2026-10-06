import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCompare } from '../context/CompareContext';
import { useAuth } from '../context/AuthContext';
import ProductCard from '../components/ProductCard';
import {
  Star, ShoppingCart, Heart, GitCompare, ShieldCheck, Truck,
  RefreshCw, CheckCircle2, ChevronRight, Zap, HelpCircle, MessageSquare
} from 'lucide-react';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id) || products[0];

  const [selectedImage, setSelectedImage] = useState(product.image || (product.images && product.images[0]));
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs');
  const [pincode, setPincode] = useState('');
  const [deliveryChecked, setDeliveryChecked] = useState(false);

  const { addToCart, cart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { toggleCompare, isInCompare } = useCompare();
  const { user, openLoginModal } = useAuth();

  const isCartAdded = cart.some(item => item.product.id === product.id);
  const isWishlisted = isInWishlist(product.id);
  const isCompared = isInCompare(product.id);

  const handleBuyNow = () => {
    addToCart(product, quantity);
    if (!user) {
      openLoginModal(() => navigate('/cart'));
    } else {
      navigate('/cart');
    }
  };

  const similarProducts = products.filter(
    p => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="product-details-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumbs-nav">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <Link to={`/products?category=${product.categorySlug}`}>{product.category}</Link>
          <ChevronRight size={14} />
          <span>{product.name}</span>
        </div>

        {/* Top Product Section */}
        <div className="details-hero-grid">
          {/* Left Media Gallery */}
          <div className="details-media-column">
            <div className="main-display-box">
              <span className="details-discount-chip">-{product.discount}</span>
              <img src={selectedImage} alt={product.name} className="main-display-img" />
            </div>

            {product.images && product.images.length > 1 && (
              <div className="thumbnails-flex">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`thumb-btn ${selectedImage === img ? 'active' : ''}`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img} alt={`${product.name} thumb ${idx}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Product Meta Info */}
          <div className="details-info-column">
            <div className="info-top-meta">
              <span className="brand-pill">{product.brand}</span>
              <span className="stock-status-pill in-stock">
                <CheckCircle2 size={14} /> In Stock ({product.stockCount || 10} units left)
              </span>
            </div>

            <h1 className="details-product-title">{product.name}</h1>

            {/* Rating */}
            <div className="details-rating-row">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating) ? '#f59e0b' : 'none'}
                    color="#f59e0b"
                  />
                ))}
              </div>
              <span className="details-score-text">{product.rating}</span>
              <span className="details-reviews-count">({product.reviewCount} customer reviews)</span>
            </div>

            {/* Price Box */}
            <div className="details-price-box">
              <div className="prices-main">
                <span className="price-big">${product.price}</span>
                {product.originalPrice && (
                  <span className="price-old">${product.originalPrice}</span>
                )}
                <span className="discount-tag-badge">Save ${(product.originalPrice - product.price)}</span>
              </div>
              <p className="inclusive-taxes-text">Inclusive of all taxes & free express delivery</p>
            </div>

            {/* Available Offers */}
            <div className="available-offers-box">
              <h4 className="offers-box-title"><Zap size={16} color="#f59e0b" /> Available Bank & Store Offers</h4>
              <ul className="offers-list">
                {product.offers ? (
                  product.offers.map((offer, i) => <li key={i}>{offer}</li>)
                ) : (
                  <li>Bank Offer: 10% Instant Discount on select Credit Cards</li>
                )}
              </ul>
            </div>

            {/* Delivery Pincode Checker */}
            <div className="delivery-check-box">
              <label>Delivery Options</label>
              <div className="pincode-input-group">
                <input
                  type="text"
                  placeholder="Enter 6-digit Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
                <button onClick={() => setDeliveryChecked(true)}>Check</button>
              </div>
              {deliveryChecked && (
                <div className="delivery-status-msg">
                  <Truck size={16} color="#10b981" /> Express Delivery available by <strong>Tomorrow, 4 PM</strong>.
                </div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="quantity-selector-row">
              <label>Quantity:</label>
              <div className="qty-counter-box">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="details-actions-row">
              <button
                className="btn-add-to-cart"
                onClick={() => addToCart(product, quantity)}
              >
                <ShoppingCart size={18} /> {isCartAdded ? 'Add More to Cart' : 'Add to Cart'}
              </button>
              <button className="btn-buy-now" onClick={handleBuyNow}>
                Buy Now
              </button>
              <button
                className={`btn-icon-secondary ${isWishlisted ? 'active-pink' : ''}`}
                onClick={() => toggleWishlist(product)}
                title="Wishlist"
              >
                <Heart size={20} fill={isWishlisted ? '#f43f5e' : 'none'} color={isWishlisted ? '#f43f5e' : '#334155'} />
              </button>
              <button
                className={`btn-icon-secondary ${isCompared ? 'active-blue' : ''}`}
                onClick={() => toggleCompare(product)}
                title="Compare"
              >
                <GitCompare size={20} color={isCompared ? '#2563eb' : '#334155'} />
              </button>
            </div>

            {/* Trust Perks */}
            <div className="details-trust-perks">
              <div className="trust-perk"><ShieldCheck size={18} color="#2563eb" /> {product.warranty || '2 Year Warranty'}</div>
              <div className="trust-perk"><RefreshCw size={18} color="#10b981" /> 30-Day Hassle Returns</div>
              <div className="trust-perk"><CheckCircle2 size={18} color="#06b6d4" /> 100% Original Authentic</div>
            </div>
          </div>
        </div>

        {/* Bottom Details Tabs */}
        <div className="details-tabs-section">
          <div className="tabs-nav-bar">
            <button
              className={`tab-link ${activeTab === 'specs' ? 'active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              Full Specifications
            </button>
            <button
              className={`tab-link ${activeTab === 'highlights' ? 'active' : ''}`}
              onClick={() => setActiveTab('highlights')}
            >
              Highlights & Features
            </button>
            <button
              className={`tab-link ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Customer Reviews ({product.reviewCount})
            </button>
            <button
              className={`tab-link ${activeTab === 'qa' ? 'active' : ''}`}
              onClick={() => setActiveTab('qa')}
            >
              Q & A
            </button>
          </div>

          <div className="tab-body-card">
            {activeTab === 'specs' && (
              <div className="specs-table-wrapper">
                <table className="specs-table">
                  <tbody>
                    {Object.entries(product.specifications || {}).map(([key, val]) => (
                      <tr key={key}>
                        <td className="spec-name">{key}</td>
                        <td className="spec-val">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'highlights' && (
              <div className="highlights-list-wrapper">
                <h3>Key Product Highlights</h3>
                <ul className="highlights-bullet-list">
                  {product.highlights.map((h, idx) => (
                    <li key={idx}><CheckCircle2 size={16} color="#2563eb" /> {h}</li>
                  ))}
                </ul>
                <p className="full-desc-para">{product.shortDescription}</p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="reviews-wrapper">
                <div className="reviews-summary-card">
                  <div className="score-big">{product.rating}</div>
                  <div className="stars-row">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <p>Based on {product.reviewCount} verified buyer reviews</p>
                </div>

                <div className="user-reviews-list">
                  <div className="single-review">
                    <div className="rev-header">
                      <strong>Mark D. (Verified Buyer)</strong>
                      <span className="rev-date">September 15, 2026</span>
                    </div>
                    <div className="stars-row">
                      {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />)}
                    </div>
                    <p className="rev-text">Extremely satisfied with this purchase! The performance and build quality exceeded my expectations. Fast 1-day delivery by Gadgetra!</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'qa' && (
              <div className="qa-wrapper">
                <div className="qa-item">
                  <strong className="q-title"><HelpCircle size={16} color="#2563eb" /> Q: Is this covered under official manufacturer warranty?</strong>
                  <p className="a-desc"><MessageSquare size={16} color="#10b981" /> A: Yes, 100% authentic original gadget backed by official brand warranty.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <section className="similar-products-section">
            <h2 className="section-title">Similar Products You Might Like</h2>
            <div className="products-grid-layout mt-4">
              {similarProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
