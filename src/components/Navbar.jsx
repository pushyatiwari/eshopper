/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import './Navbar.css';

const Navbar = (props) => (
  <header className="header">
    <p>E-shopper</p>
    <div className="navOrderDetails">
      <span>All Orders</span>
      <a href="/">
        My Basket :
        {props.cartCount}
      </a>
    </div>
  </header>
);

export default Navbar;
// https://5.imimg.com/data5/EX/QK/MY-37427162/selection_008-500x500.png
