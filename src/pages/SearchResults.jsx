import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SortBar from '../components/SortBar';
import FilterSidebar from '../components/FilterSidebar';
import { products } from '../data/products';
import { SearchX } from 'lucide-react';
import './Products.css';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    minPrice: '',
    maxPrice: '',
    minRating: 0,
    ram: [],
    storage: [],
    inStockOnly: false
  });
  const [sortBy, setSortBy] = useState('popularity');

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      minPrice: '',
      maxPrice: '',
      minRating: 0,
      ram: [],
      storage: [],
      inStockOnly: false
    });
  };

  const matchedProducts = useMemo(() => {
    const qLower = query.toLowerCase();
    return products.filter(p => {
      const matchQuery =
        !query ||
        p.name.toLowerCase().includes(qLower) ||
        p.category.toLowerCase().includes(qLower) ||
        p.brand.toLowerCase().includes(qLower) ||
        p.tags.some(t => t.toLowerCase().includes(qLower));

      if (!matchQuery) return false;

      if (filters.categories.length > 0 && !filters.categories.includes(p.categorySlug)) return false;
      if (filters.brands.length > 0 && !filters.brands.includes(p.brand)) return false;
      if (filters.minPrice && p.price < Number(filters.minPrice)) return false;
      if (filters.maxPrice && p.price > Number(filters.maxPrice)) return false;
      if (filters.minRating > 0 && p.rating < filters.minRating) return false;
      if (filters.inStockOnly && !p.availability) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return b.id.localeCompare(a.id);
      return (b.reviewCount || 0) - (a.reviewCount || 0);
    });
  }, [query, filters, sortBy]);

  return (
    <div className="products-page-container">
      <div className="container">
        <div className="products-header-banner">
          <h1 className="products-banner-title">
            Search Results for "{query}"
          </h1>
          <p className="products-banner-sub">
            Found {matchedProducts.length} matching products for your search.
          </p>
        </div>

        <div className="products-listing-layout">
          <div className="desktop-sidebar-col">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Mobile Filter Drawer */}
          {mobileFilterOpen && (
            <div className="mobile-filter-drawer-overlay">
              <div className="mobile-filter-drawer-content">
                <FilterSidebar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                  onCloseMobile={() => setMobileFilterOpen(false)}
                />
              </div>
            </div>
          )}

          <div className="products-main-col">
            <SortBar
              sortBy={sortBy}
              onSortChange={setSortBy}
              totalCount={matchedProducts.length}
              onOpenMobileFilter={() => setMobileFilterOpen(true)}
            />

            {matchedProducts.length > 0 ? (
              <div className="search-grid-2x2">
                {matchedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="no-products-found">
                <SearchX size={48} className="no-prod-icon" />
                <h3>No Matching Results</h3>
                <p>We couldn't find any products matching "{query}". Try checking your spelling or search another keyword.</p>
                <Link to="/products" className="btn-reset-filters">
                  Browse All Products
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
