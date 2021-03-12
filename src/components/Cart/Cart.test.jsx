import {
  render,
} from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Cart from './Cart';

describe(Cart.name, () => {
  const mockDescription = {
    'Fruits and Vegetables': [{
      id: 1, name: 'apple', price: 120, count: 18, category: 'Fruits & Vegatables', countInCart: 2, src: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    }],
  };
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
