import { render, screen } from '@testing-library/react';
import React from 'react';
import OrderDetails from './OrderDetails';

describe(OrderDetails.name, () => {
  const mockOrders = {
    items:
            {
              'Fruits & Vegatables': [{
                id: 1, name: 'apple', price: 120, count: 1, category: 'Fruits & Vegatables',
              }],
            },
    id: 1,
    date: 1615122360481,
  };

  test('should display all orders', () => {
    render(<OrderDetails orders={mockOrders} />);
    const navbarElement = screen.getByText('ORDER');
    expect(navbarElement.tagName).toBe('TD');
  });
  test('should display past orders with length', () => {
    render(<OrderDetails orders={mockOrders} />);
    const navbarElement = screen.getByText('ITEMS');
    expect(navbarElement.tagName).toBe('TD');
  });
});
