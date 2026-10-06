import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { categories } from '../data/products';
import { Grid } from 'lucide-react';
import './CategoryNav.css';

const CategoryNav = () => {
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get('category');

  return (
    <nav className="category-subnav">
      <div className="container category-subnav-inner">
        <Link 
          to="/products" 
          className={`all-categories-btn ${!currentCategory ? 'active-all' : ''}`}
        >
          <Grid size={16} />
          <span>All Categories</span>
        </Link>

        <div className="categories-horizontal-scroll">
          {categories.map((cat) => {
            const isActive = currentCategory === cat.slug;
            return (
              <Link
                key={cat.id}
                to={`/products?category=${cat.slug}`}
                className={`category-nav-link ${isActive ? 'active' : ''}`}
              >
                {cat.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
