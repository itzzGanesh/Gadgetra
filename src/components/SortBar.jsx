import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import './SortBar.css';

const SortBar = ({ sortBy, onSortChange, totalCount, onOpenMobileFilter }) => {
  return (
    <div className="sort-bar-container">
      <div className="sort-left-info">
        {onOpenMobileFilter && (
          <button className="mobile-filter-trigger-btn" onClick={onOpenMobileFilter}>
            Filter Products
          </button>
        )}
        <span className="results-count-text">
          Showing <strong>{totalCount}</strong> Products
        </span>
      </div>

      <div className="sort-right-controls">
        <ArrowUpDown size={16} className="sort-icon" />
        <label htmlFor="sort-select" className="sort-label">Sort By:</label>
        <select
          id="sort-select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="sort-select-dropdown"
        >
          <option value="popularity">Popularity</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="newest">Newest Arrivals</option>
          <option value="rating">Customer Rating</option>
        </select>
      </div>
    </div>
  );
};

export default SortBar;
