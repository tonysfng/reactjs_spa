import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Checkout from './Checkout';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([]);
  console.log("App cartItem : ", cartItems.length)

  return (    
    <div className="App">
      
      <BrowserRouter>

        <CartContext.Provider value={{ cartItems, setCartItems }}>
          <nav>
            <Link to="/">Home</Link><span> | </span>
            <Link to="/checkout">Checkout</Link>
          </nav>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product" element={<ProductDetail />}>
              <Route path=":id" element={<ProductDetail />} />
            </Route>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<p>404: Page not found</p>} />
          </Routes>
        </CartContext.Provider>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
