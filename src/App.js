/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/react-in-jsx-scope */
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
import { allProduct } from './constants/allProducts';
import { allOrder } from './constants/orders';
import groupByCategory from './utils/groupByCategory';
// import Counter from './components/Counter/Counter';

const App = () => {
  const [products, setProduct] = useState(allProduct);
  const [cartCount, setCartCount] = useState(0);
  const [theme, toggleTheme] = useState('light');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // .then(res => res.json())
  // .then(
  //   (result) => {
  //     setIsLoaded(true);
  //     setItems(result);
  //   },
  //   // Note: it's important to handle errors here
  //   // instead of a catch() block so that we don't swallow
  //   // exceptions from actual bugs in components.
  //   (error) => {
  //     setIsLoaded(true);
  //     setError(error);
  //   }
  // )
  const [orders] = useState(allOrder);
  useEffect(async () => {
    try {
      const items = await axios.get('/items');
      setIsLoaded(true);
      setProduct(items);
    } catch (err) {
      setIsLoaded(true);
      setError(err);
    }
  }, []);
  groupByCategory(products);
  const onIncrement = (id) => {
    setProduct(products.map((product) => {
      if (product.id === id) {
        return { ...product, count: product.count + 1 };
      }
      return product;
    }));
    setCartCount(cartCount + 1);
  };
  const onDecrement = (id) => {
    if (cartCount <= 0) {
      return;
    }
    let flag = 0;
    products.forEach((product) => {
      if (product.id === id) {
        if (cartCount && product.count === 0) flag = 1;
      }
    });
    if (flag === 1) return;
    setProduct(products.map((product) => {
      if (product.id === id) {
        if (product.count > 0) return { ...product, count: product.count - 1 };
        return { ...product };
      }
      return product;
    }));
    setCartCount(cartCount - 1);
  };
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <Navbar cartCount={cartCount} />
        <button type="button" onClick={() => (theme === 'light' ? toggleTheme('dark') : toggleTheme('light'))}>Change Theme</button>
      </ThemeContext.Provider>
      <Switch>
        <Route path="/" exact>
          {/* <Counter /> */}
          <div className="container">
            <ThemeContext.Provider value={theme}>
              <Home
                description={products}
                cartCount={cartCount}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
              />
            </ThemeContext.Provider>
          </div>

        </Route>
        <Route path="/cart" render={() => <Cart description={products} cartCount={cartCount} />} />
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/allorders">
          <AllOrders orders={orders} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
