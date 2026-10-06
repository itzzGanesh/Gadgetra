import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const local = localStorage.getItem('gadgetra_cart');
      return local ? JSON.parse(local) : [
        // Default initial demo items if empty
      ];
    } catch {
      return [];
    }
  });

  const [savedForLater, setSavedForLater] = useState(() => {
    try {
      const local = localStorage.getItem('gadgetra_saved');
      return local ? JSON.parse(local) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('gadgetra_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('gadgetra_saved', JSON.stringify(savedForLater));
  }, [savedForLater]);

  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const saveForLater = (productId) => {
    const itemToSave = cart.find(item => item.product.id === productId);
    if (itemToSave) {
      setSavedForLater(prev => [...prev, itemToSave.product]);
      removeFromCart(productId);
    }
  };

  const moveToCartFromSaved = (product) => {
    addToCart(product, 1);
    setSavedForLater(prev => prev.filter(p => p.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartSubtotal = cart.reduce(
    (sum, item) => sum + item.product.originalPrice * item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const cartDiscount = cartSubtotal - cartTotal;
  const shippingFee = cartTotal > 499 ? 0 : 25;
  const grandTotal = cartTotal + (cart.length > 0 ? shippingFee : 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        savedForLater,
        addToCart,
        removeFromCart,
        updateQuantity,
        saveForLater,
        moveToCartFromSaved,
        clearCart,
        cartSubtotal,
        cartDiscount,
        shippingFee,
        cartTotal,
        grandTotal,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
