import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Package, Truck, CheckCircle2, MapPin, Printer, ArrowLeft, Download, ShieldCheck, HelpCircle } from 'lucide-react';
import './Account.css';

const OrderDetails = () => {
  const { orderId } = useParams();
  const { orders } = useAuth();
  const order = orders.find(o => o.id === orderId) || orders[0];

  if (!order) {
    return (
      <div className="order-details-page-container">
        <div className="container text-center py-10">
          <h2>Order Not Found</h2>
          <p>The order you are looking for does not exist or has been removed.</p>
          <Link to="/orders" className="btn-edit-profile mt-4">Back to My Orders</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="order-details-page-container">
      <div className="container">
        {/* Navigation Breadcrumb */}
        <div className="back-link-row">
          <Link to="/orders" className="od-back-btn">
            <ArrowLeft size={16} /> Back to My Orders
          </Link>
        </div>

        {/* Order Details Header Banner */}
        <div className="od-main-header">
          <div className="od-header-info">
            <span className="od-order-tag">Order Details</span>
            <h1 className="od-title">Order #{order.id}</h1>
            <p className="od-meta-date">Placed on {order.date} • Total Items: {order.items?.length || 1}</p>
          </div>
          <div className="od-header-actions">
            <button className="btn-print-invoice" onClick={() => window.print()}>
              <Printer size={16} /> Download Invoice
            </button>
          </div>
        </div>

        {/* Professional Flipkart-Style Flipkart Order Status Stepper */}
        <div className="od-stepper-card">
          <h3 className="od-card-title">Order Status</h3>
          <div className="flipkart-stepper">
            <div className="step-item completed">
              <div className="step-icon-wrap">
                <CheckCircle2 size={18} />
              </div>
              <div className="step-content">
                <span className="step-title">Order Placed</span>
                <span className="step-sub">{order.date}</span>
              </div>
            </div>
            
            <div className="step-line active"></div>

            <div className="step-item completed">
              <div className="step-icon-wrap">
                <CheckCircle2 size={18} />
              </div>
              <div className="step-content">
                <span className="step-title">Order Packed</span>
                <span className="step-sub">Verified & Sealed</span>
              </div>
            </div>

            <div className="step-line active"></div>

            <div className="step-item active">
              <div className="step-icon-wrap">
                <Truck size={18} />
              </div>
              <div className="step-content">
                <span className="step-title">Out for Delivery</span>
                <span className="step-sub">Arriving Today</span>
              </div>
            </div>

            <div className="step-line"></div>

            <div className="step-item">
              <div className="step-icon-wrap">
                <Package size={18} />
              </div>
              <div className="step-content">
                <span className="step-title">Delivered</span>
                <span className="step-sub">Expected Soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Info Grid: Shipping & Payment Cards */}
        <div className="od-info-grid">
          {/* Delivery Address Card */}
          <div className="od-box-card">
            <div className="od-box-header">
              <MapPin size={20} className="box-header-icon text-blue" />
              <h3>Delivery Address</h3>
            </div>
            <div className="od-box-body">
              <h4 className="user-name">Alex Johnson</h4>
              <p className="address-text">{order.shippingAddress || '124 Tech Boulevard, Suite 400, San Jose, CA 95110'}</p>
              <div className="phone-row">
                <span className="label">Phone Number:</span>
                <span className="val">+1 (800) 555-0199</span>
              </div>
            </div>
          </div>

          {/* Payment Details Card */}
          <div className="od-box-card">
            <div className="od-box-header">
              <Package size={20} className="box-header-icon text-purple" />
              <h3>Payment Summary</h3>
            </div>
            <div className="od-box-body">
              <div className="payment-detail-row">
                <span className="label">Payment Method:</span>
                <span className="val-badge badge-blue">{order.paymentMethod || 'Credit Card / UPI'}</span>
              </div>
              <div className="payment-detail-row">
                <span className="label">Payment Status:</span>
                <span className="val-badge badge-green">Paid in Full</span>
              </div>
              <div className="payment-detail-row">
                <span className="label">Total Paid Amount:</span>
                <span className="val-price">${order.total}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Flipkart-Style Ordered Items List */}
        <div className="od-items-card">
          <div className="od-box-header border-b">
            <ShieldCheck size={20} className="box-header-icon text-green" />
            <h3>Items in this Order ({order.items?.length || 1})</h3>
          </div>
          
          <div className="od-items-list">
            {(order.items || []).map((item, idx) => (
              <div key={idx} className="od-item-row">
                <div className="item-img-container">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="item-details-col">
                  <h4 className="item-title">{item.name}</h4>
                  <p className="item-seller">Seller: Gadgetra Official Retail</p>
                  <div className="item-tags">
                    <span className="warranty-tag"><ShieldCheck size={13} /> 2 Years Gadgetra Warranty</span>
                  </div>
                </div>

                <div className="item-price-col">
                  <div className="price-main">${item.price}</div>
                  <div className="qty-sub">Qty: {item.quantity || 1}</div>
                </div>

                <div className="item-action-col">
                  <Link to={`/product/${item.id || 1}`} className="btn-buy-again">
                    Buy Again
                  </Link>
                  <button className="btn-help-support">
                    <HelpCircle size={14} /> Need Help?
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Price Summary Box */}
        <div className="od-price-summary-card">
          <div className="summary-row">
            <span>Item Subtotal:</span>
            <span>${order.total}</span>
          </div>
          <div className="summary-row">
            <span>Shipping & Delivery Fee:</span>
            <span className="text-green">FREE</span>
          </div>
          <div className="summary-row">
            <span>GST / Taxes:</span>
            <span>Included</span>
          </div>
          <div className="summary-row total-row">
            <span>Total Amount Paid:</span>
            <span className="total-amount">${order.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

