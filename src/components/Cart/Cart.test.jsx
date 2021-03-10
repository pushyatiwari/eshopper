import {
  render,
} from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Cart from './Cart';

describe(Cart.name, () => {
  const mockDescription = [{
    id: 'b2',
    name: 'melon',
    price: 40,
    count: 1,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRhOqYV2NWv0m80WzwGG2fCz6c3PzHmpz1Dg&usqp=CAU',

  }];
  test('should be called with', () => {
    const cartContainer = render(
      <BrowserRouter>
        <Cart
          description={mockDescription}
        />
      </BrowserRouter>,
    );
    expect(cartContainer).toMatchSnapshot();
  });
});
