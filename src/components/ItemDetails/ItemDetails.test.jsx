import {
  render, screen,
} from '@testing-library/react';
import React from 'react';
import ItemDetails from './ItemDetails';

describe(ItemDetails.name, () => {
  const mockDescription = {
    items:
            {
              'Fruits & Vegatables': [{
                id: 1, name: 'apple', price: 120, count: 1, category: 'Fruits & Vegatables',
              }],
            },
    id: 1,
    date: 1615122360481,
  };

  test('should be called with', () => {
    render(<ItemDetails
      items={mockDescription}
    />);
    const itemDetails = screen.getByText('Fruits & Vegatables');
    expect(itemDetails.tagName).toBe('TD');
  });
  test('should be called with', () => {
    const itemDetailsContainer = render(<ItemDetails
      items={mockDescription}
    />);
    expect(itemDetailsContainer).toMatchSnapshot();
  });
});
