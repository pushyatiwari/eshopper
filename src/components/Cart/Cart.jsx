import React from 'react';
import './Cart.css';
import PropTypes from 'prop-types';
import CartItems from '../CartItems/CartItems';

const Cart = ({ description }) => (
  <CartItems description={description} />
);

Cart.propTypes = {
  description: PropTypes.shape(PropTypes.any).isRequired,
};
export default Cart;
