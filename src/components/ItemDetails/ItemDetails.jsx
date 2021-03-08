import React from 'react';
import './ItemDetails.css';
import PropTypes from 'prop-types';

// orders: [
//     {
//       orderId: 'o1',
//       items: 12,
//       orderDate: '12-12-2020',
//       amount: 560.00,
//       products: [
//         {
//           id: 'b1',
//           name: 'Banana - Robusta',
//           price: 40,
//           count: 1,
//         },

const orderedItems = (products) => {
  const allOrderedItems = products.map((item) => (
    <tr className="item-details">
      <td>{item.name}</td>
      <td />
      <td>
        Rs.
        {item.price}
      </td>
      <td>{item.count}</td>
      <td>
        Rs.
        {item.price * item.count}
      </td>
    </tr>
  ));
  return allOrderedItems;
};

const ItemDetails = ({ items }) => {
  console.log('all items details:  ', items.products);
  const allItems = orderedItems(items.products);
  return (
    <>
      <div className="container">
        <div className="upper-container">
          <table>
            <tr className="orderitems-header">
              <td>ITEM DESCRIPTION</td>
              <td />
              <td>UNIT PRICE </td>
              <td>QUANTITY</td>
              <td>SUBTOTAL</td>
            </tr>
            <tr className="item-category">
              <td>FRUITS AND VEGETABLES</td>
              <td />
              <td />
              <td />
              <td />
            </tr>
            {allItems}
          </table>
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
};
ItemDetails.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(configShape)).isRequired,
};
export default ItemDetails;
