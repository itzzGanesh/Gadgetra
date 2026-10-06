import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart, GitCompare, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCompare } from '../context/CompareContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, cart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { toggleCompare, isInCompare } = useCompare();

  const isCartAdded = cart.some(item => item.product.id === product.id);
  const isWishlisted = isInWishlist(product.id);
  const isCompared = isInCompare(product.id);

  const handleCardClick = (e) => {
    // If user clicked interactive buttons, prevent navigation
    if (e.target.closest('button') || e.target.closest('.action-btn')) {
      return;
    }
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card-item" onClick={handleCardClick}>
      <div className="card-media-box">
        {/* Badges Left */}
        <div className="card-badge-column">
          {product.discount && (
            <span className="badge-chip discount-chip">-{product.discount}</span>
          )}
          {product.offerBadge && (
            <span className="badge-chip offer-chip">{product.offerBadge}</span>
          )}
        </div>

        {/* Quick Actions Right (Wishlist & Compare) */}
        <div className="card-top-actions">
          <button
            className={`action-icon-btn ${isWishlisted ? 'active-wishlist' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product);
            }}
            title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            <Heart size={16} fill={isWishlisted ? '#f43f5e' : 'none'} color={isWishlisted ? '#f43f5e' : '#64748b'} />
          </button>
          
          <button
            className={`action-icon-btn ${isCompared ? 'active-compare' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleCompare(product);
            }}
            title={isCompared ? 'Remove from Compare' : 'Add to Compare'}
          >
            <GitCompare size={16} color={isCompared ? '#2563eb' : '#64748b'} />
          </button>
        </div>

        <img src={product.image} alt={product.name} className="card-product-img" />
      </div>

      <div className="card-body-box">
        <span className="card-brand">{product.brand}</span>
        <h3 className="card-title">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>

        {/* Rating */}
        <div className="card-rating-row">
          <div className="stars-flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={13}
                fill={i < Math.floor(product.rating) ? '#f59e0b' : 'none'}
                color="#f59e0b"
              />
            ))}
          </div>
          <span className="rating-score">{product.rating}</span>
          <span className="rating-count">({product.reviewCount})</span>
        </div>

        {/* Prices */}
        <div className="card-price-row">
          <span className="price-current">${product.price}</span>
          {product.originalPrice && (
            <span className="price-was">${product.originalPrice}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          className={`card-cart-btn ${isCartAdded ? 'added' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product, 1);
          }}
        >
          {isCartAdded ? (
            <>
              <Check size={16} /> Added in Cart
            </>
          ) : (
            <>
              <ShoppingCart size={16} /> Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
