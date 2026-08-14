import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { productsData } from '../data/productsData';

const CartContext = createContext();

const FREE_SHIPPING_THRESHOLD = 499;
const DEFAULT_SHIPPING_FEE = 49;

export function CartProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Initial cart with 2 bestselling items like the header badge preview (count 2)
  const [cartItems, setCartItems] = useState(() => {
    return [
      {
        id: 'makhana-peri-peri-100g',
        productId: 'makhana-peri-peri',
        product: productsData[0],
        quantity: 1,
        selectedWeight: '100g',
        unitPrice: 149
      },
      {
        id: 'california-almonds-250g',
        productId: 'california-almonds',
        product: productsData[3],
        quantity: 1,
        selectedWeight: '250g',
        unitPrice: 259
      }
    ];
  });

  const [wishlist, setWishlist] = useState(['mixed-dry-fruits-jar']);
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isBoxBuilderOpen, setIsBoxBuilderOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [currentView, setCurrentView] = useState('home'); // 'home', 'shop', 'about', 'wishlist', 'product'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProduct, setActiveProduct] = useState(null);

  // Sync currentView with URL pathname changes
  useEffect(() => {
    const path = location.pathname;
    if (path === '/' || path === '/home') {
      setCurrentView('home');
    } else if (path === '/about' || path === '/about-us') {
      setCurrentView('about');
    } else if (path === '/wishlist') {
      setCurrentView('wishlist');
    } else if (path.startsWith('/product/')) {
      setCurrentView('product');
      const prodId = path.replace('/product/', '');
      const found = productsData.find(p => p.id === prodId);
      if (found) setActiveProduct(found);
    } else if (path === '/bestsellers' || path === '/best-sellers') {
      setCurrentView('shop');
      setSelectedCategory('bestsellers');
    } else if (path === '/combos' || path === '/makhana-combos') {
      setCurrentView('shop');
      setSelectedCategory('makhana-combos');
    } else if (path.startsWith('/category/')) {
      setCurrentView('shop');
      setSelectedCategory(path.replace('/category/', ''));
    } else if (path === '/all-snacks' || path === '/shop') {
      setCurrentView('shop');
      setSelectedCategory('all');
    }
  }, [location.pathname]);

  // Auto dismiss toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const addToCart = (product, quantity = 1, selectedWeight = null) => {
    const weight = selectedWeight || product.weight || 'Default';
    const itemId = `${product.id}-${weight}`;
    const price = product.price;

    setCartItems(prev => {
      const existing = prev.find(item => item.id === itemId);
      if (existing) {
        return prev.map(item =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, {
        id: itemId,
        productId: product.id,
        product,
        quantity,
        selectedWeight: weight,
        unitPrice: price
      }];
    });

    showToast(`Added ${product.name} (${weight}) to your cart!`);
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item => item.id === itemId ? { ...item, quantity } : item)
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
    showToast('Item removed from cart', 'info');
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from wishlist', 'info');
        return prev.filter(id => id !== productId);
      } else {
        const prod = productsData.find(p => p.id === productId);
        showToast(`Saved ${prod ? prod.name : 'item'} to wishlist!`);
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId) => {
    return wishlist.includes(productId);
  };

  const applyPromo = (code) => {
    const normalized = (code || '').trim().toUpperCase();
    if (normalized === 'AURIVA10' || normalized === 'FIRST10' || normalized === 'NATURE10') {
      setAppliedPromo({
        code: normalized,
        discountRate: 0.10,
        description: '10% OFF Aurivá Welcome Special'
      });
      setPromoCode(normalized);
      showToast('Promo code AURIVA10 applied: 10% OFF!');
      return { success: true, message: '10% discount applied!' };
    } else {
      showToast('Invalid promo code. Try "AURIVA10"', 'error');
      return { success: false, message: 'Invalid promo code' };
    }
  };

  const removePromo = () => {
    setAppliedPromo(null);
    setPromoCode('');
    showToast('Promo code removed', 'info');
  };

  // Calculations
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const discountAmount = appliedPromo ? Math.round(subtotal * appliedPromo.discountRate) : 0;
  const shippingFee = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : DEFAULT_SHIPPING_FEE;
  const progressToFreeShipping = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const finalTotal = subtotal - discountAmount + shippingFee;

  const navigateTo = (view, category = 'all', product = null) => {
    if (product) setActiveProduct(product);
    if (category) setSelectedCategory(category);
    setCurrentView(view);

    if (view === 'home' || view === '/') {
      navigate('/');
    } else if (view === 'about' || view === '/about') {
      navigate('/about');
    } else if (view === 'wishlist' || view === '/wishlist') {
      navigate('/wishlist');
    } else if (view === 'product') {
      if (product?.id) {
        navigate(`/product/${product.id}`);
      } else {
        navigate('/all-snacks');
      }
    } else if (view === 'shop') {
      if (category === 'bestsellers') {
        navigate('/bestsellers');
      } else if (category === 'makhana-combos') {
        navigate('/combos');
      } else if (category === 'all') {
        navigate('/all-snacks');
      } else {
        navigate(`/category/${category}`);
      }
    } else {
      navigate(view.startsWith('/') ? view : `/${view}`);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalCartCount,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        wishlist,
        toggleWishlist,
        isWishlisted,
        promoCode,
        setPromoCode,
        appliedPromo,
        applyPromo,
        removePromo,
        subtotal,
        discountAmount,
        shippingFee,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        progressToFreeShipping,
        amountNeededForFreeShipping,
        finalTotal,
        isCartOpen,
        setIsCartOpen,
        quickViewProduct,
        setQuickViewProduct,
        isSearchOpen,
        setIsSearchOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isBoxBuilderOpen,
        setIsBoxBuilderOpen,
        toast,
        showToast,
        currentView,
        setCurrentView,
        selectedCategory,
        setSelectedCategory,
        activeProduct,
        setActiveProduct,
        navigateTo
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
