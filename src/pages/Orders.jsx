import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Package, ChevronRight, Truck, CheckCircle2 } from 'lucide-react';
import './Account.css';

const Orders = () => {
  const { orders } = useAuth();

  return (
    <div className="orders-page-container">
      <div className="container">
        <h1 className="account-page-title">My Orders ({orders.length})</h1>

        {orders.length > 0 ? (
          <div className="orders-list-grid">
            {orders.map(order => (
              <div key={order.id} className="order-full-card">
                <div className="order-card-header">
                  <div className="meta-left">
                    <span className="order-id">Order ID: #{order.id}</span>
                    <span className="order-date">Placed on {order.date}</span>
                  </div>
                  <div className="meta-right">
                    <span className={`status-badge ${order.status.toLowerCase()}`}>
                      <CheckCircle2 size={14} /> {order.status}
                    </span>
                  </div>
                </div>

                <div className="order-card-body">
                  <div className="order-items-thumbnails">
                    {order.items.map((item, i) => (
                      <div key={i} className="item-thumb-wrapper">
                        <img src={item.image} alt={item.name} />
                        <span className="qty-badge">x{item.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="order-summary-meta">
                    <div className="price-tag">${order.total}</div>
                    <span className="payment-type">Paid via {order.paymentMethod}</span>
                  </div>
                </div>

                <div className="order-card-footer">
                  <span className="ship-to">Shipping to: {order.shippingAddress}</span>
                  <Link to={`/orders/${order.id}`} className="btn-view-order-details">
                    View Order Details <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-orders-view text-center">
            <Package size={64} className="empty-icon" />
            <h2>No Orders Found</h2>
            <p>You haven't placed any orders with Gadgetra yet.</p>
            <Link to="/products" className="btn-shop-now">Explore Products</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
