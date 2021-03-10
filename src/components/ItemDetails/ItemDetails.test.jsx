import {
  render, screen,
} from '@testing-library/react';
import React from 'react';
import ItemDetails from './ItemDetails';

describe(ItemDetails.name, () => {
  const mockDescription = {
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
      }],
  };
  test('should be called with', () => {
    render(<ItemDetails
      items={mockDescription}
    />);
    const itemDetails = screen.getByText('FRUITS AND VEGETABLES');
    expect(itemDetails.tagName).toBe('TD');
  });
});
