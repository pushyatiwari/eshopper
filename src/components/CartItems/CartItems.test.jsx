import {
  render, screen,
} from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CartItems from './CartItems';

describe(CartItems.name, () => {
  const description = [{
    id: 'b2',
    name: 'melon',
    price: 40,
    count: 0,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRhOqYV2NWv0m80WzwGG2fCz6c3PzHmpz1Dg&usqp=CAU',

  }];
  test('should be return TD', () => {
    render(
      <BrowserRouter>
        <CartItems
          description={description}
        />
      </BrowserRouter>,
    );
    const cartItems = screen.getByText('ITEM DESCRIPTION');
    expect(cartItems.tagName).toBe('TD');
  });
});
