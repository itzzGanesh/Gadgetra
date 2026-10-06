import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Heart, GitCompare, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCompare } from '../context/CompareContext';
import { useAuth } from '../context/AuthContext';
import CategoryNav from './CategoryNav';
import GadgetraLogo from './GadgetraLogo';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { compareCount } = useCompare();
  const { user } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="site-header">


      {/* Main Brand & Search Navbar */}
      <div className="header-main">
        <div className="container header-main-inner">
          {/* Logo */}
          <Link to="/" className="brand-logo-link">
            <GadgetraLogo size={36} showText={true} />
          </Link>

          {/* Search Bar */}
          <form className="header-search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search 500+ gadgets, 4K TVs, laptops, earbuds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="header-search-input"
            />
            <button type="submit" className="header-search-btn" aria-label="Search">
              <Search size={18} />
            </button>
          </form>

          {/* User Action Buttons */}
          <div className="header-user-actions">
            {/* Account / User Link */}
            {user ? (
              <Link to="/account" className="action-btn user-btn" title="My Account">
                <User size={20} />
                <div className="btn-label-group">
                  <span className="sub-text">Hello,</span>
                  <span className="main-text">{user.name.split(' ')[0]}</span>
                </div>
              </Link>
            ) : (
              <Link to="/login" className="action-btn user-btn" title="Sign In">
                <User size={20} />
                <div className="btn-label-group">
                  <span className="sub-text">Welcome</span>
                  <span className="main-text">Sign In</span>
                </div>
              </Link>
            )}

            {/* Compare Badge */}
            <Link to="/compare" className="action-btn icon-badge-btn" title="Compare Products">
              <GitCompare size={20} />
              <span className="action-title">Compare</span>
              {compareCount > 0 && <span className="badge-count count-blue">{compareCount}</span>}
            </Link>

            {/* Wishlist Badge */}
            <Link to="/wishlist" className="action-btn icon-badge-btn" title="Wishlist">
              <Heart size={20} />
              <span className="action-title">Wishlist</span>
              {wishlistCount > 0 && <span className="badge-count count-rose">{wishlistCount}</span>}
            </Link>

            {/* Cart Badge */}
            <Link to="/cart" className="action-btn icon-badge-btn cart-action-btn" title="Shopping Cart">
              <ShoppingBag size={20} />
              <div className="btn-label-group">
                <span className="sub-text">Cart</span>
                <span className="main-text">{cartCount} Items</span>
              </div>
              {cartCount > 0 && <span className="badge-count count-primary">{cartCount}</span>}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-hamburger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search & Drawer Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-drawer">
            <form className="mobile-drawer-search" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit">
                <Search size={18} />
              </button>
            </form>
            <div className="mobile-drawer-links">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>All Products</Link>
              <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)}>Shopping Cart ({cartCount})</Link>
              <Link to="/wishlist" onClick={() => setIsMobileMenuOpen(false)}>Wishlist ({wishlistCount})</Link>
              <Link to="/compare" onClick={() => setIsMobileMenuOpen(false)}>Compare ({compareCount})</Link>
              {user ? (
                <>
                  <Link to="/account" onClick={() => setIsMobileMenuOpen(false)}>My Account</Link>
                  <Link to="/orders" onClick={() => setIsMobileMenuOpen(false)}>My Orders</Link>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
                  <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>Register</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Horizontal Category Nav */}
      <CategoryNav />
    </header>
  );
};

export default Header;
