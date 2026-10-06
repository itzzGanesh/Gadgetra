import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Smartphone, Mail, Lock, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import GadgetraLogo from '../components/GadgetraLogo';
import './AuthPages.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loginMethod, setLoginMethod] = useState('otp'); // 'otp' or 'email'
  
  // OTP State
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  // Email State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState('');

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!mobile || mobile.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setError('');
    setOtpSent(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (!otp || otp.length < 4) {
      setError('Please enter the 4-digit OTP sent to your phone (Use: 1234).');
      return;
    }
    login(`${mobile}@gadgetra.user`, 'mobile-otp');
    navigate('/account');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both Email and Password.');
      return;
    }
    login(email, password);
    navigate('/account');
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card">
        <div className="auth-header text-center">
          <div className="auth-logo-badge">
            <GadgetraLogo size={36} showText={false} />
          </div>
          <h2>Sign In to Gadgetra</h2>
          <p>Access your orders, wishlist, and member discounts.</p>
        </div>

        {/* Method Toggle */}
        <div className="auth-method-tabs">
          <button
            className={`method-tab ${loginMethod === 'otp' ? 'active' : ''}`}
            onClick={() => { setLoginMethod('otp'); setError(''); }}
          >
            <Smartphone size={16} /> Mobile & OTP
          </button>
          <button
            className={`method-tab ${loginMethod === 'email' ? 'active' : ''}`}
            onClick={() => { setLoginMethod('email'); setError(''); }}
          >
            <Mail size={16} /> Email & Password
          </button>
        </div>

        {error && <div className="auth-error-alert">{error}</div>}

        {loginMethod === 'otp' ? (
          !otpSent ? (
            <form onSubmit={handleSendOtp} className="auth-form">
              <div className="auth-field">
                <label>Mobile Number</label>
                <div className="input-with-icon">
                  <span className="country-code-span">+1</span>
                  <input
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    maxLength={10}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn-auth-submit">
                Send OTP Verification
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="auth-form">
              <div className="otp-sent-banner">
                <ShieldCheck size={16} color="#10b981" /> OTP sent to <strong>+1 {mobile}</strong>
                <button type="button" className="btn-change-mobile" onClick={() => setOtpSent(false)}>Change</button>
              </div>

              <div className="auth-field">
                <label>Enter 4-Digit OTP (Demo: 1234)</label>
                <input
                  type="text"
                  placeholder="1234"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={4}
                  className="otp-digit-input"
                  required
                />
              </div>

              <button type="submit" className="btn-auth-submit">
                Verify OTP & Sign In
              </button>
            </form>
          )
        ) : (
          <form onSubmit={handleEmailSubmit} className="auth-form">
            <div className="auth-field">
              <label>Email Address</label>
              <div className="input-with-icon">
                <Mail size={18} className="field-icon" />
                <input
                  type="email"
                  placeholder="alex.johnson@gadgetra.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="auth-field">
              <label>Password</label>
              <div className="input-with-icon">
                <Lock size={18} className="field-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-pw-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn-auth-submit">
              Sign In to Account
            </button>
          </form>
        )}

        <div className="auth-footer text-center">
          <p>Don't have a Gadgetra account? <Link to="/register">Create Account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
