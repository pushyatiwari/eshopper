/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-use-before-define */
import React from 'react';
import './Home.css';
import PropTypes from 'prop-types';
import Product from './Product';

const RenderCards = (onIncrement, onDecrement, description) => description.map((product) => (
  <Product
    key={product.id}
    description={product}
    onIncrement={() => onIncrement(product.id)}
    onDecrement={() => onDecrement(product.id)}
  />
));

const Home = ({ onIncrement, onDecrement, description }) => (
  <div className="container">
    <div className="rendercards">
      {RenderCards(onIncrement, onDecrement, description)}
    </div>
  </div>
);

Home.propTypes = {
  description: PropTypes.objectOf(PropTypes.any).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
RenderCards.propTypes = {
  description: PropTypes.objectOf(PropTypes.any).isRequired,
  cartCount: PropTypes.number.isRequired,

};

export default Home;
// https://5.imimg.com/data5/EX/QK/MY-37427162/selection_008-500x500.png
