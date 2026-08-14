import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './modules/user/context/CartContext';
import UserRoutes from './modules/user/routes/UserRoutes';
import './modules/user/styles/user.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <UserRoutes />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
