/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './OrderDetails.css';

const eachOrderedDetails = (order) => (
  <tr>
    <td>
      Order id:
      {order.id}
    </td>
    <td>
      {Object.keys(order.items).length}
      {' '}
      items
    </td>
    <td>{new Date(order.date).toDateString()}</td>
    <td>700</td>
  </tr>
);
// {"items":{"Fruits & Vegatables":[{"id":1,"name":"apple","price":120,"count":1,"category":"Fruits & Vegatables"}]},"id":1,"date":1615122360481}

const OrderDetails = ({ orders }) => {
  console.log('orderDetails: ', JSON.stringify(orders));
  console.log(`orders  items: ${orders.items}`);
  // return (
  //   <h1>{JSON.stringify(orders)}</h1>
  // );
  const eachOrder = eachOrderedDetails(orders);
  return (
    <>
      <div className="order-details-container">
        <div className="upper-container-order-details">
          <table>
            <tbody>
              <tr className="order-items-header">
                <td>ORDER</td>
                <td>ITEMS </td>
                <td>DATE</td>
                <td>AMOUNT</td>
              </tr>
              {eachOrder}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const configShape = {
  item: PropTypes.shape(PropTypes.any),
  id: PropTypes.number,
  date: PropTypes.date,
};
OrderDetails.propTypes = {
  orders: PropTypes.shape(configShape).isRequired,
};
export default OrderDetails;
