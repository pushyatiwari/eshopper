import {
  render, screen,
} from '@testing-library/react';
import React from 'react';
import Product from './Product';

describe(Product.name, () => {
  const description = {
    id: 'b2',
    name: 'melon',
    price: 40,
    count: 0,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRhOqYV2NWv0m80WzwGG2fCz6c3PzHmpz1Dg&usqp=CAU',

  };
  test('should display img', () => {
    render(<Product
      description={description}
      onIncrement={() => 'increment'}
      onDecrement={() => 'decrement'}
    />);
    const productElement = screen.getByText('melon');
    expect(productElement.tagName).toBe('P');
  });
  test('should display para', () => {
    render(<Product
      description={description}
      onIncrement={() => 'increment'}
      onDecrement={() => 'decrement'}
    />);
    const productElement = screen.getByText('1 kg');
    expect(productElement.tagName).toBe('P');
  });
});
