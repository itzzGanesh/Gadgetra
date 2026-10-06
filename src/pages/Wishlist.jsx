import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Heart, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="empty-wishlist-view">
        <div className="container text-center">
          <div className="empty-wishlist-card">
            <Heart size={64} className="empty-icon" />
            <h2>Your Wishlist is Empty</h2>
            <p>Save items you like to your wishlist so you can revisit them anytime.</p>
            <Link to="/products" className="btn-shop-now">
              Explore Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page-container">
      <div className="container">
        <h1 className="wishlist-page-title">My Wishlist ({wishlist.length} Items)</h1>

        <div className="wishlist-grid">
          {wishlist.map(product => (
            <div key={product.id} className="wishlist-item-card">
              <button
                className="remove-wish-btn"
                onClick={() => removeFromWishlist(product.id)}
                title="Remove"
              >
                <Trash2 size={16} />
              </button>

              <div className="wish-img-box">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="wish-info-box">
                <span className="wish-brand">{product.brand}</span>
                <h3 className="wish-title">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>

                <div className="wish-price-row">
                  <span className="now">${product.price}</span>
                  {product.originalPrice && (
                    <span className="was">${product.originalPrice}</span>
                  )}
                </div>

                <button
                  className="btn-move-cart"
                  onClick={() => {
                    addToCart(product, 1);
                    removeFromWishlist(product.id);
                  }}
                >
                  <ShoppingCart size={16} /> Move to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
