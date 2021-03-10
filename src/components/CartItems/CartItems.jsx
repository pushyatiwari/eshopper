import React from 'react';
import PropTypes from 'prop-types';
import './CartItems.css';
import { Link } from 'react-router-dom';

const cart = (description) => {
  const items = description.map((product) => {
    if (product.count > 0) {
      const subTotal = product.price * product.count;
      return (
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>
            Rs.
            {product.price}
          </td>
          <td>{product.count}</td>
          <td>{subTotal}</td>
        </tr>
      );
    }
    return 0;
  });

  const filteredItems = items.filter((item) => item !== 0);
  return filteredItems;
};
const calculateTotal = (description) => {
  const total = description.reduce((accumulator, product) => {
    const subTotal = product.price * product.count;
    return accumulator + subTotal;
  }, 0);
  return total;
};
const CartItems = ({ description }) => {
  const cartItems = cart(description);
  const total = calculateTotal(description);
  return (
    <>
      <div className="cartitem-container">
        <span className="basket-item">
          YOUR BASKET
          (
          {`${cartItems.length} `}
          items)
        </span>
        <div className="basket-container">
          <div className="upper-container">
            <table>
              <tbody>
                <tr className="cartitems-header">
                  <td>ITEM DESCRIPTION</td>
                  <td>UNIT PRICE</td>
                  <td>QUANTITY</td>
                  <td>SUBTOTAL</td>
                </tr>
                <tr className="cartitem-category">
                  <td>Fruits and Vegatables</td>
                  <td />
                  <td />
                  <td />
                </tr>
                {cartItems}
              </tbody>
            </table>
          </div>
          <div className="bottom-part">
            <Link to="/">
              <button className="continue-shopping" type="button">CONTINUE SHOPPING</button>
            </Link>
            <div className="cartitem-display-total">
              <div>
                TOTAL
                {` ${total}`}
              </div>
              <hr />
              <div>
                <Link to="/checkout">
                  <button id="checkout" type="button">CHECKOUT</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const configShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number,
  src: PropTypes.string,
};
CartItems.propTypes = {
  description: PropTypes.arrayOf(PropTypes.shape(configShape)).isRequired,
};
export default CartItems;
