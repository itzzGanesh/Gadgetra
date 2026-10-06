import React from 'react';
import { brandsByCategory } from '../data/products';
import { Filter, RotateCcw, X } from 'lucide-react';
import './FilterSidebar.css';

const FilterSidebar = ({
  activeCategorySlug,
  filters,
  onFilterChange,
  onClearFilters,
  onCloseMobile
}) => {
  const categoryBrands = activeCategorySlug && brandsByCategory[activeCategorySlug]
    ? brandsByCategory[activeCategorySlug]
    : ['Apple', 'Samsung', 'Sony', 'Dell', 'LG', 'ASUS', 'Bose', 'Anker', 'Logitech', 'Xiaomi'];

  const handleBrandToggle = (brand) => {
    const updated = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    onFilterChange('brands', updated);
  };

  const handleRamToggle = (ramVal) => {
    const updated = filters.ram.includes(ramVal)
      ? filters.ram.filter(r => r !== ramVal)
      : [...filters.ram, ramVal];
    onFilterChange('ram', updated);
  };

  const handleStorageToggle = (storageVal) => {
    const updated = filters.storage.includes(storageVal)
      ? filters.storage.filter(s => s !== storageVal)
      : [...filters.storage, storageVal];
    onFilterChange('storage', updated);
  };

  return (
    <aside className="filter-sidebar">
      <div className="filter-sidebar-header">
        <div className="filter-title-box">
          <Filter size={18} />
          <h3>Filters</h3>
        </div>
        <div className="filter-header-actions">
          <button className="clear-btn" onClick={onClearFilters}>
            <RotateCcw size={14} /> Clear All
          </button>
          {onCloseMobile && (
            <button className="mobile-close-filter" onClick={onCloseMobile}>
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Brand Filter (Specific to active category!) */}
      <div className="filter-group">
        <h4 className="filter-group-title">Brand</h4>
        <div className="filter-options-list max-scroll">
          {categoryBrands.map((b) => (
            <label key={b} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.brands.includes(b)}
                onChange={() => handleBrandToggle(b)}
              />
              <span className="label-text">{b}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="filter-group">
        <h4 className="filter-group-title">Price Range ($)</h4>
        <div className="price-inputs-row">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice}
            onChange={(e) => onFilterChange('minPrice', e.target.value)}
          />
          <span>to</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(e) => onFilterChange('maxPrice', e.target.value)}
          />
        </div>
      </div>

      {/* RAM Filter (For Mobiles & Laptops) */}
      {(activeCategorySlug === 'mobiles' || activeCategorySlug === 'laptops') && (
        <div className="filter-group">
          <h4 className="filter-group-title">RAM</h4>
          <div className="filter-options-list">
            {['8GB', '12GB', '16GB', '32GB', '64GB'].map((ram) => (
              <label key={ram} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={filters.ram.includes(ram)}
                  onChange={() => handleRamToggle(ram)}
                />
                <span className="label-text">{ram}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Storage Filter (For Mobiles & Laptops) */}
      {(activeCategorySlug === 'mobiles' || activeCategorySlug === 'laptops') && (
        <div className="filter-group">
          <h4 className="filter-group-title">Storage</h4>
          <div className="filter-options-list">
            {['128GB', '256GB', '512GB', '1TB SSD', '2TB SSD'].map((st) => (
              <label key={st} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={filters.storage.includes(st)}
                  onChange={() => handleStorageToggle(st)}
                />
                <span className="label-text">{st}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Screen Size / Resolution (For TVs) */}
      {activeCategorySlug === 'tvs' && (
        <div className="filter-group">
          <h4 className="filter-group-title">Screen Size</h4>
          <div className="filter-options-list">
            {['43 Inch', '55 Inch', '65 Inch', 'Up to 150 Inch'].map((sc) => (
              <label key={sc} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={filters.storage.includes(sc)}
                  onChange={() => handleStorageToggle(sc)}
                />
                <span className="label-text">{sc}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Rating Filter */}
      <div className="filter-group">
        <h4 className="filter-group-title">Customer Rating</h4>
        <div className="filter-options-list">
          {[4, 3, 2].map((stars) => (
            <label key={stars} className="radio-label">
              <input
                type="radio"
                name="ratingFilter"
                checked={filters.minRating === stars}
                onChange={() => onFilterChange('minRating', stars)}
              />
              <span className="label-text">★ {stars} Stars & Above</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="filter-group">
        <h4 className="filter-group-title">Availability</h4>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onFilterChange('inStockOnly', e.target.checked)}
          />
          <span className="label-text">In Stock Only</span>
        </label>
      </div>
    </aside>
  );
};

export default FilterSidebar;
