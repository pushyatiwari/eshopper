/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => (
  <header className="header">
    <Link to="/" className="e-shopper">
      <p>E-shopper</p>
    </Link>
    <div className="nav-order-details">
      <Link to="/allorders">
        <button>All Orders</button>
      </Link>
      <Link to="/cart">
        <button>
          My Basket :
          {props.cartCount}
        </button>
      </Link>
    </div>
  </header>
);

export default Navbar;
// https://5.imimg.com/data5/EX/QK/MY-37427162/selection_008-500x500.png
