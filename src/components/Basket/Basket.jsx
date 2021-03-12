import React from 'react';
import './Basket.css';
import PropTypes from 'prop-types';

const Basket = ({ description, onIncrement, onDecrement }) => (
  <div className="description">
    <p>
      MRP:
      {description.price}
    </p>
    <div className="basketItems">
      <button onClick={onDecrement} type="button">-</button>
      {description.countInCart}
      <button onClick={onIncrement} type="button">+</button>
    </div>
  </div>
);

const configShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number,
  src: PropTypes.string,
};
Basket.propTypes = {
  description: PropTypes.shape(configShape).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Basket;
// https://5.imimg.com/data5/EX/QK/MY-37427162/selection_008-500x500.png
