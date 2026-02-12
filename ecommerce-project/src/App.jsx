import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { Tracking } from './pages/Tracking';
import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items')
      .then((response) => {
        setCart(response.data);
      })
  }, []);

  // function addToCart(product, quantity) {
  //   const existingItem = cart.find(item => item.product.id === product.id);
  //   if (existingItem) {
  //     setCart(cart.map(item =>
  //       item.product.id === product.id
  //         ? { ...item, quantity: item.quantity + quantity }
  //         : item
  //     ));
  //   } else {
  //     setCart([...cart, { product, quantity }]);
  //   }
  // }

  return (
    <Routes>
      <Route path='/' element={<HomePage addToCart={addToCart} cart={cart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} />} />
      <Route path='orders' element={<OrdersPage />} />
      <Route path='tracking' element={<Tracking />} />

    </Routes>
  )
}

export default App
