import React from 'react';
import './AllOrders.css';
import PropTypes from 'prop-types';
import OrderDetails from '../OrderDetails/OrderDetails';
import ItemDetails from '../ItemDetails/ItemDetails';

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

const renderOrders = (orders) => {
  const renderAllOrders = orders.map((order) => (
    <div className="eachOrder" key={order.orderId}>
      <OrderDetails orders={order} />
      <ItemDetails items={order} />
      <p />
    </div>
  ));
  return renderAllOrders;
};

const AllOrders = ({ orders }) => {
  const allOrders = renderOrders(orders);
  return (
    <div className="allOrders">
      <p className="basket-item">
        ALL ORDERS
      </p>
      <p className="basket-item">
        Past Orders(
        {orders.length}
        )
      </p>
      { allOrders }
    </div>
  );
};

const configShape = {
  orderId: PropTypes.string,
  items: PropTypes.number,
  orderDate: PropTypes.string,
  amount: PropTypes.number,
  products: PropTypes.any,
};
AllOrders.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape(configShape)).isRequired,
};
export default AllOrders;
