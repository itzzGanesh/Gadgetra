import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const initialOrders = [
  {
    id: 'ORD-98421',
    date: '2026-09-20',
    total: 1299,
    status: 'Delivered',
    paymentMethod: 'Credit Card (VISA)',
    shippingAddress: '124 Tech Boulevard, Suite 400, San Jose, CA 95110',
    items: [
      {
        id: 'gadget-51',
        name: 'Apple Titanium X1 UltraBook 107',
        price: 1299,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80'
      }
    ]
  }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const local = localStorage.getItem('gadgetra_user');
      return local ? JSON.parse(local) : null; // Guest by default!
    } catch {
      return null;
    }
  });

  const [orders, setOrders] = useState(() => {
    try {
      const local = localStorage.getItem('gadgetra_orders');
      return local ? JSON.parse(local) : initialOrders;
    } catch {
      return initialOrders;
    }
  });

  const [addresses] = useState([
    {
      id: 1,
      name: 'Alex Johnson (Home)',
      street: '124 Tech Boulevard, Suite 400',
      city: 'San Jose',
      state: 'CA',
      zip: '95110',
      phone: '+1 (800) 555-0199',
      isDefault: true
    }
  ]);

  // Login Modal State
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);

  useEffect(() => {
    if (user) {
      localStorage.setItem('gadgetra_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('gadgetra_user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('gadgetra_orders', JSON.stringify(orders));
  }, [orders]);

  // Non-blocking guest auto-popup after 6 seconds if not logged in and not prompted before
  useEffect(() => {
    if (!user) {
      const hasSeenPopup = sessionStorage.getItem('gadgetra_seen_login_popup');
      if (!hasSeenPopup) {
        const timer = setTimeout(() => {
          setIsLoginModalOpen(true);
          sessionStorage.setItem('gadgetra_seen_login_popup', 'true');
        }, 6000);
        return () => clearTimeout(timer);
      }
    }
  }, [user]);

  const openLoginModal = (onSuccessCallback) => {
    if (onSuccessCallback) setPendingAction(() => onSuccessCallback);
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
    setPendingAction(null);
  };

  const login = (email, password) => {
    const mockUser = {
      name: email.split('@')[0].replace('.', ' ').toUpperCase(),
      email: email,
      phone: '+1 (800) 555-0199',
      joinedDate: 'September 2026'
    };
    setUser(mockUser);
    setIsLoginModalOpen(false);
    if (pendingAction) {
      pendingAction();
      setPendingAction(null);
    }
    return true;
  };

  const register = (name, email, password) => {
    const newUser = {
      name: name,
      email: email,
      phone: '+1 (800) 555-0199',
      joinedDate: 'September 2026'
    };
    setUser(newUser);
    setIsLoginModalOpen(false);
    if (pendingAction) {
      pendingAction();
      setPendingAction(null);
    }
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const addOrder = (orderData) => {
    const newOrder = {
      id: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toISOString().split('T')[0],
      total: orderData.total,
      status: 'Processing',
      paymentMethod: orderData.paymentMethod || 'Credit Card',
      shippingAddress: orderData.shippingAddress || addresses[0].street,
      items: orderData.items
    };
    setOrders(prev => [newOrder, ...prev]);
    return newOrder;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        orders,
        addresses,
        login,
        register,
        logout,
        addOrder,
        isLoginModalOpen,
        openLoginModal,
        closeLoginModal
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
