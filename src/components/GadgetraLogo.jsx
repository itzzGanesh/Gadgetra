import React from 'react';
import './GadgetraLogo.css';

const GadgetraLogo = ({ size = 36, showText = true }) => {
  return (
    <div className="gadgetra-logo-wrapper">
      <div 
        className="g-symbol-badge" 
        style={{ width: `${size}px`, height: `${size}px`, fontSize: `${size * 0.58}px` }}
      >
        <span className="g-letter">G</span>
        <span className="g-spark"></span>
      </div>
      {showText && (
        <span className="gadgetra-brand-text">
          GADGET<span className="brand-highlight">RA</span>
        </span>
      )}
    </div>
  );
};

export default GadgetraLogo;
