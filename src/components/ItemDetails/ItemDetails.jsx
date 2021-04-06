/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import './ItemDetails.css';
import PropTypes from 'prop-types';

// {
// "items":
//     {"Fruits & Vegatables":[{"id":1,"name":"apple","price":120,"count":1,"category":"Fruits & Vegatables"}]},
//     "id":1,
//     "date":1615122360481}

const orderedItems = (products) => {
  const orderItems = [];
  console.log('Itemproducts: ', Object.keys(products));
  Object.keys(products.items).map((item) => {
    orderItems.push(
      <React.Fragment key={item}>
        <tr className="item-category" key="category">
          <td>{item}</td>
          <td />
          <td />
          <td />
          <td />
        </tr>
      </React.Fragment>,
    );
    products.items[item].map((eachI) => {
      orderItems.push((
        <React.Fragment key={eachI.id}>

          <tr className="item-details">
            <td>{eachI.name}</td>
            <td />
            <td>
              Rs.
              {eachI.price}
            </td>
            <td>{eachI.count}</td>
            <td>
              Rs.
              {eachI.price * eachI.count}
            </td>
          </tr>
        </React.Fragment>
      ));
    });
  });
  console.log(`order: ${orderItems}`);
  return orderItems;
};

const ItemDetails = ({ items }) => {
  console.log('in items:  ', items);
  const allItems = orderedItems(items);
  return (
    <>
      <div className="container">
        <div className="upper-container">
          <table>
            <tbody>
              <tr className="orderitems-header" key="header">
                <td>ITEM DESCRIPTION</td>
                <td />
                <td>UNIT PRICE </td>
                <td>QUANTITY</td>
                <td>SUBTOTAL</td>
              </tr>
              {allItems}
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
ItemDetails.propTypes = {
  items: PropTypes.shape(configShape).isRequired,

};
export default ItemDetails;
