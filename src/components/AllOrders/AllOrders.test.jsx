import { render, screen } from '@testing-library/react';
import React from 'react';
import AllOrders from './AllOrders';

describe(AllOrders.name, () => {
  const mockOrders = [{
    items:
            {
              'Fruits & Vegatables': [{
                id: 1, name: 'apple', price: 120, count: 1, category: 'Fruits & Vegatables',
              }],
            },
    id: 1,
    date: 1615122360481,
  },

  ];
  test('should display all orders', () => {
    render(<AllOrders orders={mockOrders} />);
    const navbarElement = screen.getByText('ALL ORDERS');
    expect(navbarElement.tagName).toBe('P');
  });
  test('should display past orders with length', () => {
    render(<AllOrders orders={mockOrders} />);
    const navbarElement = screen.getByText(`Past Orders(${mockOrders.length})`);
    expect(navbarElement.tagName).toBe('P');
  });
  test('should be called with', () => {
    const allOrdersContainer = render(
      <AllOrders orders={mockOrders} />,
    );
    expect(allOrdersContainer).toMatchSnapshot();
  });
});
