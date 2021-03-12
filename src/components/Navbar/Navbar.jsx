/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import './Navbar.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../../themeContext';

const Navbar = ({ cartCount }) => {
  const theme = useContext(ThemeContext);
  return (
    <header className={theme === 'dark' ? 'darkTheme header' : 'whiteTheme header'}>
      <Link to="/" className="e-shopper">
        <p>E-shopper</p>
      </Link>
      <div className="nav-order-details">
        <Link to="/allorders">
          <button className="nav-buttons">All Orders</button>
        </Link>
        <Link to="/cart" data-testid="cart-test">
          <button className={theme === 'dark' ? 'darkTheme nav-buttons' : 'whiteTheme nav-buttons'}>
            My Basket :
            {cartCount}
          </button>
        </Link>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,

};

export default Navbar;
// https://5.imimg.com/data5/EX/QK/MY-37427162/selection_008-500x500.png
