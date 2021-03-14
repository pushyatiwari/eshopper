/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import './AllOrders.css';
import PropTypes from 'prop-types';
import OrderDetails from '../OrderDetails/OrderDetails';
import ItemDetails from '../ItemDetails/ItemDetails';

const renderOrders = (orders) => {
  // console.log(`render: ${JSON.stringify(orders)}`);
  const renderAllOrders = orders.map((order) => (
    <div className="eachOrder" key={order.id}>
      <OrderDetails orders={order} />
      <ItemDetails items={order} />
      <p />
    </div>
  ));
  return renderAllOrders;
};

// [
// {
// "items":
//     {"Fruits & Vegatables":[{"id":1,"name":"apple","price":120,"count":1,"category":"Fruits & Vegatables"}]},
//     "id":1,
//     "date":1615122360481}
//     ,
// {"items":
// {"Household Items":[{"id":2,"name":"table cloth","price":200,"count":1,"category":"Household Items"},{"id":9,"name":"broom","price":250,"count":1,"category":"Household Items"}]},"id":2,"date":1615122649963},{"items":{"Fruits & Vegatables":[{"id":1,"name":"apple","price":120,"count":1,"category":"Fruits & Vegatables"}],"Household Items":[{"id":2,"name":"table cloth","price":200,"count":1,"category":"Household Items"},{"id":9,"name":"broom","price":250,"count":1,"category":"Household Items"}],"Dairy & Eggs":[{"id":8,"name":"curd","price":20,"count":2,"category":"Dairy & Eggs"}]},"id":3,"date":1615122664245},{"items":{"Household Items":[{"id":4,"name":"duster","price":80,"count":1,"category":"Household Items"}],"Dairy & Eggs":[{"id":5,"name":"milk","price":10,"count":2,"category":"Dairy & Eggs"},{"id":6,"name":"butter","price":20,"count":2,"category":"Dairy & Eggs"}]},"id":4,"date":1615122763596}]
const AllOrders = ({ orders }) => {
  console.log(`all orders: ${JSON.stringify(orders)}`);
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
  items: PropTypes.objectOf(PropTypes.array),
  id: PropTypes.number,
  date: PropTypes.date,
};
AllOrders.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape(configShape)).isRequired,
};
export default AllOrders;
