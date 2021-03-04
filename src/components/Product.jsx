/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';
import Basket from './Basket';

function Product({ description, onIncrement, onDecrement }) {
  console.log('descrp: ', description.src);
  return (
    <div className="productContainer">
      <div className="product">
        <img src={description.src} alt="" height="200" width="200" />
        <p className="productDescription">{description.name}</p>
        <p className="productDescription">
          1 kg
        </p>
      </div>
      <Basket
        price={40}
        description={description}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </div>
  );
}

Product.propTypes = {
  description: PropTypes.objectOf(PropTypes.any).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,

};
export default Product;
// https://5.imimg.com/data5/EX/QK/MY-37427162/selection_008-500x500.png
