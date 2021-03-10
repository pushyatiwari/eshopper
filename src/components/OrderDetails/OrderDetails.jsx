import React from 'react';
import PropTypes from 'prop-types';
import './OrderDetails.css';
// orders: [
//   {
//     orderId: 'o1',
//     items: 12,
//     orderDate: '12-12-2020',
//     amount: 560.00,
//     products: [
//       {
//         id: 'b1',
//         name: 'Banana - Robusta',
//         price: 40,
//         count: 1,
//       },
const eachOrderedDetails = (order) => (
  <tr>
    <td>
      Order id:
      {order.orderId}
    </td>
    <td>
      {order.items}
      {' '}
      items
    </td>
    <td>{order.orderDate}</td>
    <td>{order.amount}</td>
  </tr>
);
const OrderDetails = ({ orders }) => {
  // console.log('orderDetails: ', JSON.stringify(orders));
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
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number,
  src: PropTypes.string,
};
OrderDetails.propTypes = {
  orders: PropTypes.shape(configShape).isRequired,
};
export default OrderDetails;
