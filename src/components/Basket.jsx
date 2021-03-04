/* eslint-disable react/button-has-type */

import React from 'react';
import './Basket.css';
import PropTypes from 'prop-types';

const Basket = ({ description, onIncrement, onDecrement }) => (
  <div className="description">
    <p>
      MRP
      {description.price}
    </p>
    <div className="basketItems">
      <button onClick={onDecrement}>-</button>
      {description.count}
      <button onClick={onIncrement}>+</button>
    </div>
  </div>
);

Basket.propTypes = {
  description: PropTypes.objectOf(PropTypes.any).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,

};

export default Basket;
// https://5.imimg.com/data5/EX/QK/MY-37427162/selection_008-500x500.png
