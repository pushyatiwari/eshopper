/* eslint-disable array-callback-return */
import React from 'react';
import PropTypes from 'prop-types';
import './CartItems.css';
import { Link } from 'react-router-dom';
// keys[0] = "fruitandveg"

const cart = (description) => {
  const newArray = [];
  Object.keys(description).map((category) => (
    description[category].map((product) => {
      if (product.countInCart > 0) {
        const subTotal = product.price * product.countInCart;
        newArray.push((
          <>
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                Rs.
                {product.price}
              </td>
              <td>{product.countInCart}</td>
              <td>{subTotal}</td>
            </tr>
          </>
        ));
      }
    })));

  return newArray;
};

const calculateTotal = (description) => {
  Object.keys(description).map((category) => (
    description[category].reduce((accumulator, product) => {
      const subTotal = product.price * product.countInCart;
      return accumulator + subTotal;
    }, 0)
  ));
};

// const total = description.reduce((accumulator, product) => {
//   const subTotal = product.price * product.countInCart;
//   return accumulator + subTotal;
// }, 0);
// return total;
// };

const CartItems = ({ description }) => {
  const cartItems = cart(description);
  // console.log(cartItems);
  // console.log(`desc:${JSON.stringify(description)}`);
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
// desc:{"Fruits & Vegatables":[{"id":1,"name":"apple","price":120,"count":18,"category":"Fruits & Vegatables","countInCart":2,"src":"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"},

CartItems.propTypes = {
  description: PropTypes.shape(PropTypes.any).isRequired,
};
export default CartItems;
