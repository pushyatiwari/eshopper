/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import AllOrders from './components/AllOrders/AllOrders';
import { ThemeContext } from './themeContext';
import { groupByCategory, groupOrderByCategory } from './utils/groupByCategory';

const App = () => {
  const [groupProducts, setGroupProduct] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const [theme, toggleTheme] = useState('light');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [orders, setOrders] = useState([]);

  const onCheckout = async () => {
    const checkoutItems = { items: [] };
    Object.keys(groupProducts).map((product) => {
      groupProducts[product].map((eachItem) => {
        const itemObject = {};
        if (eachItem.countInCart > 0) {
          itemObject.name = eachItem.name;
          itemObject.count = eachItem.countInCart;
          itemObject.price = eachItem.price;
          itemObject.category = eachItem.category;
          checkoutItems.items.push(itemObject);
        }
      });
    });
    try {
      const items = await axios.post('/orders', checkoutItems);
      const allorders = await axios.get('/orders');
      setIsLoaded(true);
      const groupedOrders = groupOrderByCategory(allorders);
      setOrders(groupedOrders);
    } catch (err) {
      console.log('error: ', err.message);
    }
  };

  useEffect(async () => {
    try {
      const items = await axios.get('/items');
      const groupedProducts = groupByCategory(items);
      setIsLoaded(true);
      setGroupProduct(groupedProducts);
    } catch (err) {
      setIsLoaded(false);
      setError(err);
    }
  }, []);
  useEffect(async () => {
    try {
      const allorders = await axios.get('/orders');
      setIsLoaded(true);
      const groupedOrders = groupOrderByCategory(allorders);
      setOrders(groupedOrders);
    } catch (err) {
      setIsLoaded(true);
      setError(err);
    }
  }, [orders]);

  const onIncrement = (id, category) => {
    const modifiedProductCount = groupProducts[category].map((product) => {
      if (product.id === id) {
        const newProductCount = product.count - 1;
        const newProductCartCount = product.countInCart + 1;
        const newProduct = { ...product, count: newProductCount, countInCart: newProductCartCount };
        return newProduct;
      }
      return product;
    });
    groupProducts[category] = modifiedProductCount;
    setGroupProduct({ ...groupProducts });
    setCartCount(cartCount + 1);
  };
  const onDecrement = (id, category) => {
    if (cartCount <= 0) {
      return;
    }
    const modifiedProductCount = groupProducts[category].map((product) => {
      if (product.id === id && product.countInCart > 0) {
        const newProductCount = product.count + 1;
        const newProductCartCount = product.countInCart - 1;
        const newProduct = { ...product, count: newProductCount, countInCart: newProductCartCount };
        setCartCount(cartCount - 1);
        return newProduct;
      }
      return product;
    });
    groupProducts[category] = modifiedProductCount;
    setGroupProduct({ ...groupProducts });
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <Navbar cartCount={cartCount} />
        <button
          type="button"
          onClick={() => (theme === 'light'
            ? toggleTheme('dark') : toggleTheme('light'))}
        >
          Change Theme
        </button>
      </ThemeContext.Provider>
      <Switch>
        <Route path="/" exact>
          {/* <Counter /> */}
          <div className="container">
            <ThemeContext.Provider value={theme}>
              <Home
                description={groupProducts}
                cartCount={cartCount}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
              />
            </ThemeContext.Provider>
          </div>

        </Route>
        <Route path="/cart" render={() => <Cart description={groupProducts} cartCount={cartCount} />} />
        <Route path="/checkout">
          <Checkout checkout={onCheckout} />
        </Route>
        <Route path="/allorders">
          <AllOrders orders={orders} />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

export default App;
