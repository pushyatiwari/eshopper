const axiosDataGetItems = {
  data: {
    data: [
      {
        id: 1,
        name: 'apple',
        price: 120,
        count: 20,
        category: 'Fruits & Vegatables',
      },
      {
        id: 2,
        name: 'table cloth',
        price: 200,
        count: 3,
        category: 'Household Items',
      },
    ],
  },

};

const axiosDataGetOrders = {
  data: {
    data: [
      {
        items: [
          {
            id: 1,
            name: 'apple',
            price: 120,
            count: 1,
            category: 'Fruits & Vegatables',
          },
        ],
        id: 1,
        date: 1615122360481,
      },
      {
        items: [
          {
            id: 2,
            name: 'table cloth',
            price: 200,
            count: 1,
            category: 'Household Items',
          },
          {
            id: 9,
            name: 'broom',
            price: 250,
            count: 1,
            category: 'Household Items',
          },
        ],
        id: 2,
        date: 1615122649963,
      },
    ],
  },
};

const axiosDataGetItemsResolved = {
  'Fruits & Vegatables': [{
    category: 'Fruits & Vegatables', count: 20, countInCart: 0, id: 1, name: 'apple', price: 120, src: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  }],
  'Household Items': [{
    category: 'Household Items', count: 3, countInCart: 0, id: 2, name: 'table cloth', price: 200, src: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  }],
};
const axiosDataGetOrdersResolved = [{
  date: 1615122360481,
  id: 1,
  items: {
    'Fruits & Vegatables': [{
      category: 'Fruits & Vegatables', count: 1, id: 1, name: 'apple', price: 120,
    }],
  },
}, {
  date: 1615122649963,
  id: 2,
  items: {
    'Household Items': [{
      category: 'Household Items', count: 1, id: 2, name: 'table cloth', price: 200,
    }, {
      category: 'Household Items', count: 1, id: 9, name: 'broom', price: 250,
    }],
  },
}];
export {
  axiosDataGetItems,
  axiosDataGetOrders,
  axiosDataGetItemsResolved,
  axiosDataGetOrdersResolved,
};
