import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';
import { User, Package, Heart, MapPin, Edit3, CheckCircle2, XCircle, Save, LogOut } from 'lucide-react';
import './Account.css';

const Account = () => {
  const navigate = useNavigate();
  const { user, orders, addresses, logout } = useAuth();
  const { wishlistCount } = useWishlist();

  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [saveAlert, setSaveAlert] = useState(false);

  // Form State
  const [profileData, setProfileData] = useState({
    name: user ? user.name : 'Alex Johnson',
    email: user ? user.email : 'alex.johnson@gadgetra.com',
    phone: user ? user.phone : '+1 (800) 555-0199',
    dob: '1995-08-14',
    gender: 'Male',
    street: '124 Tech Boulevard, Suite 400',
    city: 'San Jose',
    state: 'CA',
    pincode: '95110',
    preferredDelivery: 'Home'
  });

  const [formData, setFormData] = useState({ ...profileData });

  if (!user) {
    return (
      <div className="account-login-prompt">
        <div className="container text-center">
          <div className="prompt-card">
            <h2>Please Sign In to Access Your Profile</h2>
            <p>Track your orders, edit profile details, and manage your wishlist.</p>
            <Link to="/login" className="btn-primary-action">Sign In Now</Link>
          </div>
        </div>
      </div>
    );
  }

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setProfileData({ ...formData });
    setIsEditing(false);
    setSaveAlert(true);
    setTimeout(() => setSaveAlert(false), 3000);
  };

  const handleCancelEdit = () => {
    setFormData({ ...profileData });
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="account-page-container">
      <div className="container">
        <h1 className="account-page-title">My Account & Profile</h1>

        <div className="account-layout">
          {/* Sidebar */}
          <aside className="account-sidebar">
            <div className="user-profile-summary">
              <div className="avatar-circle">
                {profileData.name.charAt(0).toUpperCase()}
              </div>
              <div className="user-info">
                <h3>{profileData.name}</h3>
                <p>{profileData.email}</p>
                <span className="member-badge">Gadgetra Prime Member</span>
              </div>
            </div>

            <nav className="account-nav-list">
              <button
                className={`acc-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <User size={18} /> My Profile
              </button>
              <button
                className={`acc-nav-item ${activeTab === 'orders' ? 'active' : ''}`}
                onClick={() => navigate('/orders')}
              >
                <Package size={18} /> My Orders ({orders.length})
              </button>
              <button
                className={`acc-nav-item ${activeTab === 'wishlist' ? 'active' : ''}`}
                onClick={() => navigate('/wishlist')}
              >
                <Heart size={18} /> Wishlist ({wishlistCount})
              </button>
              <button
                className={`acc-nav-item ${activeTab === 'addresses' ? 'active' : ''}`}
                onClick={() => setActiveTab('addresses')}
              >
                <MapPin size={18} /> Saved Addresses
              </button>
              <button className="acc-nav-item logout-btn" onClick={handleLogout}>
                <LogOut size={18} /> Sign Out
              </button>
            </nav>
          </aside>

          {/* Main Body */}
          <div className="account-main-content">
            {saveAlert && (
              <div className="saved-alert-banner">
                <CheckCircle2 size={16} /> Profile changes updated successfully!
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="acc-tab-card">
                <div className="card-header-flex">
                  <h2>Personal Information</h2>
                  {!isEditing ? (
                    <button className="btn-edit-profile" onClick={() => setIsEditing(true)}>
                      <Edit3 size={16} /> Edit Profile
                    </button>
                  ) : (
                    <div className="edit-btn-group">
                      <button className="btn-save-profile" onClick={handleSaveProfile}>
                        <Save size={16} /> Save Changes
                      </button>
                      <button className="btn-cancel-profile" onClick={handleCancelEdit}>
                        <XCircle size={16} /> Cancel
                      </button>
                    </div>
                  )}
                </div>

                {!isEditing ? (
                  <div className="profile-details-grid">
                    <div className="detail-item">
                      <label>Full Name</label>
                      <p>{profileData.name}</p>
                    </div>
                    <div className="detail-item">
                      <label>Email Address</label>
                      <p>{profileData.email}</p>
                    </div>
                    <div className="detail-item">
                      <label>Mobile Number</label>
                      <p>{profileData.phone}</p>
                    </div>
                    <div className="detail-item">
                      <label>Date of Birth</label>
                      <p>{profileData.dob}</p>
                    </div>
                    <div className="detail-item">
                      <label>Gender</label>
                      <p>{profileData.gender}</p>
                    </div>
                    <div className="detail-item">
                      <label>Preferred Delivery Address</label>
                      <p>{profileData.preferredDelivery}</p>
                    </div>
                    <div className="detail-item full-span">
                      <label>Street Address</label>
                      <p>{profileData.street}, {profileData.city}, {profileData.state} - {profileData.pincode}</p>
                    </div>
                  </div>
                ) : (
                  <form className="profile-edit-form" onSubmit={handleSaveProfile}>
                    <div className="form-grid">
                      <div className="form-field">
                        <label>Full Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>

                      <div className="form-field">
                        <label>Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>

                      <div className="form-field">
                        <label>Mobile Number</label>
                        <input
                          type="text"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>

                      <div className="form-field">
                        <label>Date of Birth</label>
                        <input
                          type="date"
                          value={formData.dob}
                          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        />
                      </div>

                      <div className="form-field">
                        <label>Gender</label>
                        <select
                          value={formData.gender}
                          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="form-field">
                        <label>Preferred Delivery Address</label>
                        <select
                          value={formData.preferredDelivery}
                          onChange={(e) => setFormData({ ...formData, preferredDelivery: e.target.value })}
                        >
                          <option value="Home">Home</option>
                          <option value="Office">Office</option>
                        </select>
                      </div>

                      <div className="form-field full-span">
                        <label>Street Address</label>
                        <input
                          type="text"
                          value={formData.street}
                          onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                        />
                      </div>

                      <div className="form-field">
                        <label>City</label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        />
                      </div>

                      <div className="form-field">
                        <label>State</label>
                        <input
                          type="text"
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        />
                      </div>

                      <div className="form-field">
                        <label>Pincode</label>
                        <input
                          type="text"
                          value={formData.pincode}
                          onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        />
                      </div>
                    </div>
                  </form>
                )}
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="acc-tab-card">
                <h2>Saved Delivery Addresses</h2>
                <div className="addresses-grid">
                  {addresses.map(addr => (
                    <div key={addr.id} className="address-card">
                      {addr.isDefault && <span className="default-chip">Default</span>}
                      <h4>{addr.name}</h4>
                      <p>{addr.street}</p>
                      <p>{addr.city}, {addr.state} {addr.zip}</p>
                      <p className="phone">Phone: {addr.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
