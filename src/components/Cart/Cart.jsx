import React from 'react';
import './Cart.css';
import PropTypes from 'prop-types';
import CartItems from '../CartItems/CartItems';

const Cart = ({ description }) => (
  <CartItems description={description} />
);

const configShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number,
  src: PropTypes.string,
};
Cart.propTypes = {
  description: PropTypes.arrayOf(PropTypes.shape(configShape)).isRequired,
};
export default Cart;
