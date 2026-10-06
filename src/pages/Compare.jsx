import React from 'react';
import { Link } from 'react-router-dom';
import { useCompare } from '../context/CompareContext';
import { useCart } from '../context/CartContext';
import { GitCompare, X, ShoppingCart, ArrowRight, Trash2 } from 'lucide-react';
import './Compare.css';

const Compare = () => {
  const { compareList, removeFromCompare, clearCompare } = useCompare();
  const { addToCart } = useCart();

  if (compareList.length === 0) {
    return (
      <div className="empty-compare-view">
        <div className="container text-center">
          <div className="empty-compare-card">
            <GitCompare size={64} className="empty-icon" />
            <h2>No Products Selected for Comparison</h2>
            <p>Add up to 4 products to compare specs, prices, and features side by side.</p>
            <Link to="/products" className="btn-shop-now">
              Browse Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="compare-page-container">
      <div className="container">
        <div className="compare-header-row">
          <div>
            <h1 className="compare-page-title">Product Comparison ({compareList.length}/4)</h1>
            <p className="compare-subtitle">Compare technical specifications, prices, ratings, and warranty details.</p>
          </div>
          <button className="btn-clear-compare" onClick={clearCompare}>
            <Trash2 size={16} /> Clear Comparison
          </button>
        </div>

        <div className="compare-table-wrapper">
          <table className="compare-table">
            <thead>
              <tr>
                <th className="feature-col-header">Specifications</th>
                {compareList.map(product => (
                  <th key={product.id} className="product-col-header">
                    <button
                      className="remove-comp-btn"
                      onClick={() => removeFromCompare(product.id)}
                      title="Remove product"
                    >
                      <X size={16} />
                    </button>
                    <img src={product.image} alt={product.name} className="comp-thumb" />
                    <h3 className="comp-name">{product.name}</h3>
                    <span className="comp-price">${product.price}</span>
                    <button
                      className="comp-add-cart-btn"
                      onClick={() => addToCart(product, 1)}
                    >
                      <ShoppingCart size={14} /> Add to Cart
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="spec-label">Brand</td>
                {compareList.map(p => <td key={p.id}>{p.brand}</td>)}
              </tr>
              <tr>
                <td className="spec-label">Rating</td>
                {compareList.map(p => <td key={p.id}>★ {p.rating} ({p.reviewCount})</td>)}
              </tr>
              <tr>
                <td className="spec-label">Original Price</td>
                {compareList.map(p => <td key={p.id}>${p.originalPrice || p.price}</td>)}
              </tr>
              <tr>
                <td className="spec-label">Discount</td>
                {compareList.map(p => <td key={p.id} className="text-red">{p.discount || 'N/A'}</td>)}
              </tr>
              <tr>
                <td className="spec-label">RAM Memory</td>
                {compareList.map(p => <td key={p.id}>{p.specifications?.RAM || 'N/A'}</td>)}
              </tr>
              <tr>
                <td className="spec-label">Storage</td>
                {compareList.map(p => <td key={p.id}>{p.specifications?.Storage || 'N/A'}</td>)}
              </tr>
              <tr>
                <td className="spec-label">Display</td>
                {compareList.map(p => <td key={p.id}>{p.specifications?.Display || p.specifications?.DisplaySize || 'N/A'}</td>)}
              </tr>
              <tr>
                <td className="spec-label">Processor</td>
                {compareList.map(p => <td key={p.id}>{p.specifications?.Processor || p.specifications?.Chip || 'N/A'}</td>)}
              </tr>
              <tr>
                <td className="spec-label">Battery</td>
                {compareList.map(p => <td key={p.id}>{p.specifications?.Battery || 'N/A'}</td>)}
              </tr>
              <tr>
                <td className="spec-label">Camera</td>
                {compareList.map(p => <td key={p.id}>{p.specifications?.Camera || 'N/A'}</td>)}
              </tr>
              <tr>
                <td className="spec-label">Warranty</td>
                {compareList.map(p => <td key={p.id}>{p.warranty}</td>)}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Compare;
