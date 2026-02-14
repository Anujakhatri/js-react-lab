import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cart, setCart] = useState([]);

  const refreshCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  }

  useEffect(() => {
    refreshCart();
  }, []);


  return (
    <Routes>
      <Route index element={<HomePage cart={cart} refreshCart={refreshCart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} refreshCart={refreshCart} />} />
      <Route path='orders' element={<OrdersPage cart={cart} refreshCart={refreshCart} />} />

    </Routes>
  )
}

export default App
