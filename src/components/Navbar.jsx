import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import GadgetraLogo from './GadgetraLogo';
import './Navbar.css';

const Navbar = ({ cartCount = 3, onSearchSubmit, onCartClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNav, setActiveNav] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Categories', href: '#categories' },
    { name: 'Trending Products', href: '#products' },
    { name: 'Special Offers', href: '#deals' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Smart Suite', href: '#smart-features' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearchSubmit) onSearchSubmit(searchQuery);
  };

  return (
    <header className="navbar-header">
      {/* Top Support Bar */}
      <div className="navbar-top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span>Official Gadgetra Electronics Store</span>
          </div>
          <div className="top-bar-links">
            <span>Support: 24/7 Hotline (+1 800-555-GADGET)</span>
            <span className="divider">|</span>
            <span>Track Order</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar-main">
        <div className="container navbar-container">
          {/* Logo */}
          <a href="#home" className="navbar-logo">
            <GadgetraLogo size={36} showText={true} />
          </a>


          {/* Desktop Search Bar */}
          <form className="navbar-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search gadgets, 4K TVs, chargers, laptops..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button" aria-label="Search">
              <Search size={18} />
            </button>
          </form>

          {/* Desktop Nav Links */}
          <div className="navbar-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${activeNav === link.name ? 'active' : ''}`}
                onClick={() => setActiveNav(link.name)}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions (Login & Cart) */}
          <div className="navbar-actions">
            <button className="icon-btn login-btn" title="Login / Register">
              <User size={20} />
              <span className="action-label">Login</span>
            </button>

            <button className="icon-btn cart-btn" onClick={onCartClick} title="Shopping Cart">
              <ShoppingBag size={20} />
              <span className="cart-badge">{cartCount}</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar & Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-drawer">
            <form className="mobile-search" onSubmit={handleSearch}>
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
            <div className="mobile-nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
