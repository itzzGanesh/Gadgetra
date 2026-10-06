import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import GadgetraLogo from '../components/GadgetraLogo';
import './AuthPages.css';

const NotFound = () => {
  return (
    <div className="auth-page-container">
      <div className="auth-card text-center" style={{ maxWidth: '520px' }}>
        <div className="auth-logo-badge">
          <GadgetraLogo size={40} showText={false} />
        </div>
        <h1 style={{ fontSize: '3rem', fontWeight: 900, color: '#2563eb', margin: '10px 0' }}>404</h1>
        <h2>Page Not Found</h2>
        <p style={{ color: '#64748b', margin: '12px 0 24px 0' }}>
          The page or product you are looking for might have been moved, removed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn-auth-submit" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
          Return to Home <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
