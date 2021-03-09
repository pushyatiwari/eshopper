/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import './Product.scss';
import Basket from '../Basket/Basket';

const Product = ({ description, onIncrement, onDecrement }) => {
  console.log('descrp: ', description.src);
  return (
    <div className="productContainer">
      <div className="product">
        <img src={description.src} alt="product" />
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
};
// products: [
//   {
//     id: 'b1',
//     name: 'Banana - Robusta',
//     price: 40,
//     count: 0,
//     src: 'https://5.imimg.com/data5/EX/QK/MY-37427162/selection_008-500x500.png',
//   },
const configShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number,
  src: PropTypes.string,
};

Product.propTypes = {
  description: PropTypes.shape(configShape).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,

};
export default Product;
// https://5.imimg.com/data5/EX/QK/MY-37427162/selection_008-500x500.png
