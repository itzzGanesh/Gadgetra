import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import DealsSection from '../components/DealsSection';
import PromoBanner from '../components/PromoBanner';
import ProductCard from '../components/ProductCard';
import WhyShop from '../components/WhyShop';
import SmartFeatures from '../components/SmartFeatures';
import CategoryProductSlider from '../components/CategoryProductSlider';
import { products, brands } from '../data/products';
import { Sparkles, ArrowRight } from 'lucide-react';
import './Home.css';

/* Category sliders to show on home page — pick the most popular ones */
const homeCategorySliders = [
  { slug: 'mobiles',    name: 'Mobiles & Smartphones' },
  { slug: 'laptops',    name: 'Laptops & Computers' },
  { slug: 'audio',      name: 'Audio & Headphones' },
  { slug: 'tvs',        name: 'Smart TVs' },
  { slug: 'wearables',  name: 'Wearables & Smartwatches' },
  { slug: 'gaming',     name: 'Gaming Gear' },
];

const Home = () => {
  const bestSellers      = products.filter(p => p.isBestSeller).slice(0, 8);
  const trendingProducts = products.filter(p => p.isTrending).slice(0, 8);

  return (
    <div className="home-page-view">

      {/* 1. Hero Promotional Carousel */}
      <Hero />

      {/* 2. Top Deals + Countdown */}
      <DealsSection />

      {/* 3. Shop by Category tiles */}
      <Categories />

      {/* 4. Category Product Sliders — one per major category */}
      <section className="home-section bg-slate" id="category-sliders">
        <div className="container">
          <div className="home-section-header">
            <div>
              <span className="section-tag"><Sparkles size={13} style={{ marginRight: 4, verticalAlign: 'middle' }} />Shop by Category</span>
              <h2 className="section-title">Products &amp; Offers by Category</h2>
            </div>
            <Link to="/products" className="section-view-all">
              Browse All <ArrowRight size={16} />
            </Link>
          </div>

          {homeCategorySliders.map(cat => (
            <CategoryProductSlider
              key={cat.slug}
              categorySlug={cat.slug}
              categoryName={cat.name}
            />
          ))}
        </div>
      </section>

      {/* 5. Best Selling Products grid */}
      <section className="home-section bg-white" id="bestsellers">
        <div className="container">
          <div className="home-section-header">
            <div>
              <span className="section-tag">Most Popular</span>
              <h2 className="section-title">Best Selling Products</h2>
            </div>
            <Link to="/products" className="section-view-all">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
          <div className="products-grid-layout">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. In-Page Special Offers Banner */}
      <PromoBanner />

      {/* 7. Trending Electronics grid */}
      <section className="home-section bg-slate" id="trending">
        <div className="container">
          <div className="home-section-header">
            <div>
              <span className="section-tag">Hot &amp; Trending</span>
              <h2 className="section-title">Trending Electronics</h2>
            </div>
            <Link to="/products" className="section-view-all">
              Explore Trending <ArrowRight size={16} />
            </Link>
          </div>
          <div className="products-grid-layout">
            {trendingProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Popular Brands */}
      <section className="brands-showcase-section">
        <div className="container">
          <div className="text-center mb-6">
            <span className="section-tag">Official Partners</span>
            <h2 className="section-title">Popular Electronics Brands</h2>
          </div>
          <div className="brands-grid">
            {brands.map(brand => (
              <div key={brand} className="brand-chip-card">
                <span>{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Smart Suite & Service Features */}
      <SmartFeatures />

      {/* 10. Why Shop with Gadgetra */}
      <WhyShop />
    </div>
  );
};

export default Home;
