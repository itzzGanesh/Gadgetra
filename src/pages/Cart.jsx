import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { ShoppingBag, Trash2, Bookmark, ArrowRight, ShieldCheck, Truck, Check } from 'lucide-react';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const {
    cart,
    savedForLater,
    removeFromCart,
    updateQuantity,
    saveForLater,
    moveToCartFromSaved,
    cartSubtotal,
    cartDiscount,
    shippingFee,
    cartTotal,
    grandTotal,
    clearCart
  } = useCart();

  const { user, addOrder, openLoginModal } = useAuth();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'FLASH50' || promoCode.trim().toUpperCase() === 'GADGET15') {
      setPromoApplied(true);
    } else {
      alert('Invalid Promo Code. Try "FLASH50" or "GADGET15"');
    }
  };

  const processOrderPlacement = () => {
    if (cart.length === 0) return;
    const finalTotal = Math.max(0, grandTotal - (promoApplied ? 50 : 0));
    const orderData = {
      total: finalTotal,
      items: cart.map(item => ({
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        image: item.product.image
      }))
    };
    const createdOrder = addOrder(orderData);
    clearCart();
    navigate(`/orders/${createdOrder.id}`);
  };

  const handlePlaceOrder = () => {
    if (!user) {
      // Require login only at checkout/order stage!
      openLoginModal(processOrderPlacement);
    } else {
      processOrderPlacement();
    }
  };

  const finalTotal = Math.max(0, grandTotal - (promoApplied ? 50 : 0));

  if (cart.length === 0 && savedForLater.length === 0) {
    return (
      <div className="empty-cart-view">
        <div className="container text-center">
          <div className="empty-cart-card">
            <ShoppingBag size={64} className="empty-icon" />
            <h2>Your Shopping Cart is Empty</h2>
            <p>Looks like you haven't added any electronics to your cart yet.</p>
            <Link to="/products" className="btn-shop-now">
              Start Shopping <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <div className="container">
        <h1 className="cart-page-title">Shopping Cart ({cart.length} Items)</h1>

        <div className="cart-layout">
          {/* Cart Items Left */}
          <div className="cart-items-column">
            {cart.length > 0 ? (
              <div className="cart-items-list">
                {cart.map(({ product, quantity }) => (
                  <div key={product.id} className="cart-item-card">
                    <img src={product.image} alt={product.name} className="cart-item-img" />

                    <div className="cart-item-info">
                      <span className="cart-item-brand">{product.brand}</span>
                      <h3 className="cart-item-title">
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                      </h3>
                      <p className="cart-item-specs">{product.specs || product.shortDescription}</p>

                      <div className="cart-item-price">
                        <span className="now">${product.price}</span>
                        {product.originalPrice && (
                          <span className="was">${product.originalPrice}</span>
                        )}
                        {product.discount && (
                          <span className="chip">-{product.discount}</span>
                        )}
                      </div>
                    </div>

                    <div className="cart-item-actions">
                      <div className="cart-qty-box">
                        <button onClick={() => updateQuantity(product.id, quantity - 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => updateQuantity(product.id, quantity + 1)}>+</button>
                      </div>

                      <div className="action-buttons-group">
                        <button
                          className="btn-text-action"
                          onClick={() => saveForLater(product.id)}
                        >
                          <Bookmark size={14} /> Save for Later
                        </button>
                        <button
                          className="btn-text-action danger"
                          onClick={() => removeFromCart(product.id)}
                        >
                          <Trash2 size={14} /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="cart-empty-notice">
                <p>No active items in cart.</p>
              </div>
            )}

            {/* Saved for Later Section */}
            {savedForLater.length > 0 && (
              <div className="saved-later-section">
                <h3>Saved for Later ({savedForLater.length})</h3>
                <div className="saved-items-grid">
                  {savedForLater.map(product => (
                    <div key={product.id} className="saved-item-card">
                      <img src={product.image} alt={product.name} />
                      <div className="saved-item-details">
                        <h4>{product.name}</h4>
                        <span className="saved-price">${product.price}</span>
                        <button
                          className="btn-move-to-cart"
                          onClick={() => moveToCartFromSaved(product)}
                        >
                          Move to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Right */}
          <div className="cart-summary-column">
            <div className="summary-card">
              <h3 className="summary-title">Order Summary</h3>

              {/* Promo Code Form */}
              <form className="promo-form" onSubmit={handleApplyPromo}>
                <input
                  type="text"
                  placeholder="Enter Voucher Code (FLASH50)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button type="submit">Apply</button>
              </form>
              {promoApplied && (
                <div className="promo-success-msg">
                  <Check size={14} /> Voucher FLASH50 Applied ($50 OFF)
                </div>
              )}

              <div className="summary-rows">
                <div className="summary-row">
                  <span>Subtotal Price</span>
                  <span>${cartSubtotal}</span>
                </div>
                <div className="summary-row text-green">
                  <span>Product Discounts</span>
                  <span>-${cartDiscount}</span>
                </div>
                {promoApplied && (
                  <div className="summary-row text-green">
                    <span>Promo Code Discount</span>
                    <span>-$50</span>
                  </div>
                )}
                <div className="summary-row">
                  <span>Delivery Charges</span>
                  <span>{shippingFee === 0 ? 'FREE' : `$${shippingFee}`}</span>
                </div>
                <div className="summary-row total-row">
                  <span>Total Amount</span>
                  <span>${finalTotal}</span>
                </div>
              </div>

              <button className="btn-place-order" onClick={handlePlaceOrder}>
                Place Order <ArrowRight size={18} />
              </button>

              <div className="cart-guarantee-box">
                <div><ShieldCheck size={16} /> 256-Bit SSL Encrypted Checkout</div>
                <div><Truck size={16} /> Guaranteed Doorstep Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
