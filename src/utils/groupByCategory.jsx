/* eslint-disable no-param-reassign */
const groupByCategory = (data) => {
  const groupProduct = {};
  if (data.length !== 0) {
    if (data.data.data.length > 0) {
      const items = data.data.data;
      try {
        items.forEach((item) => {
          if ((`${item.category}` in groupProduct)) {
            const newItem = item;
            newItem.src = 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';
            newItem.countInCart = 0;
            groupProduct[`${item.category}`] = [...groupProduct[item.category], newItem];
          } else {
            groupProduct[`${item.category}`] = [];
            const newItem = item;
            newItem.countInCart = 0;
            newItem.src = 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';
            groupProduct[`${item.category}`].push(newItem);
          }
        });
        return groupProduct;
      } catch (err) {
        console.log(`error: ${err.message}`);
        return err.message;
      }
    }
  }
  return groupProduct;
};

const groupOrderByCategory = (data) => {
  console.log('group by category : ', data.data.data);
  const allOrders = data.data.data;
  allOrders.forEach((order) => {
    console.log('items: ', order);
    const groupProduct = {};
    try {
      order.items.forEach((item) => {
        if ((`${item.category}` in groupProduct)) {
          const newItem = item;
          groupProduct[`${item.category}`] = [...groupProduct[item.category], newItem];
        } else {
          groupProduct[`${item.category}`] = [];
          const newItem = item;
          groupProduct[`${item.category}`].push(newItem);
        }
      });
      order.items = groupProduct;
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  });
  return allOrders;
};
export { groupByCategory, groupOrderByCategory };
