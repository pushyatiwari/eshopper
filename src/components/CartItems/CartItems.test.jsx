import {
  render, screen,
} from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CartItems from './CartItems';

describe(CartItems.name, () => {
  const description = {
    'Fruits and Vegetables': [{
      id: 1, name: 'apple', price: 120, count: 18, category: 'Fruits & Vegatables', countInCart: 2, src: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    }],
  };
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
  test('should be called with', () => {
    const cartItemsContainer = render(
      <BrowserRouter>
        <CartItems
          description={description}
        />
      </BrowserRouter>,
    );
    screen.logTestingPlaygroundURL();
    expect(cartItemsContainer).toMatchSnapshot();
  });
});
