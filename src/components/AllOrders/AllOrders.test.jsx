import { render, screen } from '@testing-library/react';
import React from 'react';
import AllOrders from './AllOrders';

describe(AllOrders.name, () => {
  const mockOrders = [
    {
      orderId: 'o1',
      items: 12,
      orderDate: '12-12-2020',
      amount: 560.00,
      products: [
        {
          id: 'b1',
          name: 'Banana - Robusta',
          price: 40,
          count: 1,
        },
        {
          id: 'b2',
          name: 'melon',
          price: 40,
          count: 2,
        },
        {
          id: 'b3',
          name: 'apple',
          price: 40,
          count: 3,
        },
      ],
    }];
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
});
