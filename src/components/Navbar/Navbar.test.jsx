import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe(Navbar.name, () => {
  test('should display para', () => {
    render(
      <BrowserRouter>
        <Navbar
          cartCount={2}
        />
      </BrowserRouter>,
    );
    const navbarElement = screen.getByText('E-shopper');
    expect(navbarElement.tagName).toBe('P');
  });
  test('should display all orders', () => {
    render(
      <BrowserRouter>
        <Navbar
          cartCount={2}
        />
      </BrowserRouter>,
    );
    const navbarElement = screen.getByText('All Orders');
    expect(navbarElement.tagName).toBe('BUTTON');
  });
  test('should render the basket', () => {
    render(
      <BrowserRouter>
        <Navbar
          cartCount={2}
        />
      </BrowserRouter>,
    );
    const cart = screen.getByTestId('cart-test');
    fireEvent.click(cart);
    expect(document.location.href).toBe('http://localhost/cart');
  });
  test('should be called with', () => {
    const navbarContainer = render(
      <BrowserRouter>
        <Navbar
          cartCount={2}
        />
      </BrowserRouter>,
    );
    expect(navbarContainer).toMatchSnapshot();
  });
});
