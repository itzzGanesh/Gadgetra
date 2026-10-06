import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import FilterSidebar from '../components/FilterSidebar';
import SortBar from '../components/SortBar';
import ProductCard from '../components/ProductCard';
import CategoryProductSlider from '../components/CategoryProductSlider';
import { products, categories, brandsByCategory } from '../data/products';
import { ChevronRight, SearchX, CheckCircle } from 'lucide-react';
import './Products.css';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'mobiles';
  const brandParam = searchParams.get('brand') || '';

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filters State
  const [filters, setFilters] = useState({
    brands: brandParam ? [brandParam] : [],
    minPrice: '',
    maxPrice: '',
    minRating: 0,
    ram: [],
    storage: [],
    inStockOnly: false
  });

  const [sortBy, setSortBy] = useState('popularity');

  // Handle active category object
  const activeCategoryObj = categories.find(c => c.slug === categoryParam) || categories[0];
  const categoryBrands = brandsByCategory[activeCategoryObj.slug] || ['Apple', 'Samsung', 'Sony', 'LG', 'ASUS', 'Gadgetra'];

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      brands: [],
      minPrice: '',
      maxPrice: '',
      minRating: 0,
      ram: [],
      storage: [],
      inStockOnly: false
    });
    setSearchParams({ category: activeCategoryObj.slug });
  };

  const handleSelectBrandTile = (brandName) => {
    if (brandParam === brandName) {
      // Toggle off brand
      setSearchParams({ category: activeCategoryObj.slug });
      setFilters(prev => ({ ...prev, brands: [] }));
    } else {
      // Set active brand
      setSearchParams({ category: activeCategoryObj.slug, brand: brandName });
      setFilters(prev => ({ ...prev, brands: [brandName] }));
    }
  };

  // STRICT HIERARCHY FILTERING: Category -> Subcategory/Brand -> Products
  const filteredProducts = useMemo(() => {
    const selectedBrand = searchParams.get('brand') || (filters.brands.length === 1 ? filters.brands[0] : null);

    return products.filter(p => {
      // 1. STRICT Category Match
      if (p.categorySlug !== activeCategoryObj.slug) {
        return false;
      }

      // 2. STRICT Brand / Subcategory Match if selected
      if (selectedBrand && p.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false;
      }

      // 3. Additional Filter Sidebar Brands if multi-selected
      if (filters.brands.length > 0 && !filters.brands.includes(p.brand)) {
        return false;
      }

      // 4. Price filter
      if (filters.minPrice && p.price < Number(filters.minPrice)) return false;
      if (filters.maxPrice && p.price > Number(filters.maxPrice)) return false;

      // 5. Rating filter
      if (filters.minRating > 0 && p.rating < filters.minRating) return false;

      // 6. In Stock filter
      if (filters.inStockOnly && !p.availability) return false;

      // 7. RAM filter
      if (filters.ram.length > 0 && p.specifications?.RAM) {
        if (!filters.ram.some(r => p.specifications.RAM.includes(r))) return false;
      }

      // 8. Storage filter
      if (filters.storage.length > 0 && (p.specifications?.Storage || p.specifications?.ScreenSize)) {
        const itemVal = p.specifications.Storage || p.specifications.ScreenSize;
        if (!filters.storage.some(s => itemVal.includes(s))) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return b.id.localeCompare(a.id);
      return (b.reviewCount || 0) - (a.reviewCount || 0); // Popularity
    });
  }, [activeCategoryObj, searchParams, filters, sortBy]);

  const activeBrandName = searchParams.get('brand');

  return (
    <div className="products-page-container">
      <div className="container">
        {/* Breadcrumb Hierarchy */}
        <div className="category-breadcrumbs">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <Link to={`/products?category=${activeCategoryObj.slug}`}>{activeCategoryObj.name}</Link>
          {activeBrandName && (
            <>
              <ChevronRight size={14} />
              <span className="current-crumb">{activeBrandName}</span>
            </>
          )}
        </div>

        {/* Category Header */}
        <div className="category-page-header">
          <h1 className="category-main-title">
            {activeBrandName ? `${activeBrandName} ${activeCategoryObj.name}` : activeCategoryObj.name}
          </h1>
          <p className="category-meta-subtitle">
            Showing {filteredProducts.length} authentic products in {activeCategoryObj.name} with official 2-year warranty.
          </p>

          {/* Category-Specific Brand & Subcategory Horizontal Tile Row */}
          <div className="brand-tiles-container">
            <span className="tiles-label">Select Brand / Subcategory:</span>
            <div className="brand-tiles-scroll">
              <button
                className={`brand-tile-pill ${!activeBrandName ? 'active' : ''}`}
                onClick={() => {
                  setSearchParams({ category: activeCategoryObj.slug });
                  setFilters(prev => ({ ...prev, brands: [] }));
                }}
              >
                All {activeCategoryObj.name}
              </button>

              {categoryBrands.map(b => (
                <button
                  key={b}
                  className={`brand-tile-pill ${activeBrandName === b ? 'active' : ''}`}
                  onClick={() => handleSelectBrandTile(b)}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Category Showcase Slider (3-second Auto Slide + Offers) */}
        <div className="category-page-slider-wrapper" style={{ marginBottom: '24px' }}>
          <CategoryProductSlider
            categorySlug={activeCategoryObj.slug}
            categoryName={activeCategoryObj.name}
          />
        </div>

        {/* Listing Main Grid & Sidebar Layout */}

        <div className="products-listing-layout">
          {/* Desktop Filter Sidebar */}
          <div className="desktop-sidebar-col">
            <FilterSidebar
              activeCategorySlug={activeCategoryObj.slug}
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
                  activeCategorySlug={activeCategoryObj.slug}
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                  onCloseMobile={() => setMobileFilterOpen(false)}
                />
              </div>
            </div>
          )}

          {/* Right Product Grid Column */}
          <div className="products-main-col">
            <SortBar
              sortBy={sortBy}
              onSortChange={setSortBy}
              totalCount={filteredProducts.length}
              onOpenMobileFilter={() => setMobileFilterOpen(true)}
            />

            {filteredProducts.length > 0 ? (
              <div className="compact-products-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="no-products-found">
                <SearchX size={48} className="no-prod-icon" />
                <h3>No Matching Products Found</h3>
                <p>No products match your selected brand or filter criteria inside {activeCategoryObj.name}.</p>
                <button className="btn-reset-filters" onClick={handleClearFilters}>
                  Reset Category Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
