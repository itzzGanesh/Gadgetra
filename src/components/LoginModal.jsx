import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import GadgetraLogo from './GadgetraLogo';
import './LoginModal.css';

const LoginModal = () => {
  const { isLoginModalOpen, closeLoginModal, login, register } = useAuth();
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (activeTab === 'login') {
      if (!email || !password) {
        setError('Please enter email and password.');
        return;
      }
      login(email, password);
    } else {
      if (!name || !email || !password) {
        setError('Please fill in all registration fields.');
        return;
      }
      register(name, email, password);
    }
  };

  return (
    <div className="login-modal-overlay" onClick={closeLoginModal}>
      <div className="login-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="login-modal-close" onClick={closeLoginModal} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header-branding">
          <div className="modal-logo-icon">
            <GadgetraLogo size={32} showText={false} />
          </div>
          <h3>Unlock Gadgetra Deals</h3>
          <p>Sign in to track orders, save wishlists, and complete checkout.</p>
        </div>

        {/* Auth Tabs */}
        <div className="modal-auth-tabs">
          <button
            className={`modal-tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => { setActiveTab('login'); setError(''); }}
          >
            Sign In
          </button>
          <button
            className={`modal-tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => { setActiveTab('register'); setError(''); }}
          >
            Create Account
          </button>
        </div>

        {error && <div className="modal-error-alert">{error}</div>}

        <form onSubmit={handleSubmit} className="modal-form">
          {activeTab === 'register' && (
            <div className="modal-input-group">
              <label>Full Name</label>
              <div className="input-wrap">
                <User size={16} className="wrap-icon" />
                <input
                  type="text"
                  placeholder="Alex Johnson"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="modal-input-group">
            <label>Email Address</label>
            <div className="input-wrap">
              <Mail size={16} className="wrap-icon" />
              <input
                type="email"
                placeholder="alex.johnson@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="modal-input-group">
            <label>Password</label>
            <div className="input-wrap">
              <Lock size={16} className="wrap-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="pw-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button type="submit" className="btn-modal-submit">
            {activeTab === 'login' ? 'Sign In & Continue' : 'Create Free Account'}
          </button>
        </form>

        <div className="modal-guest-continue text-center">
          <button className="btn-continue-guest" onClick={closeLoginModal}>
            Continue Browsing as Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
