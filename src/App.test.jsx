// eslint-disable-next-line no-unused-vars
import {
  render, screen, fireEvent, waitFor, act,
} from '@testing-library/react';
import React from 'react';
import axios from 'axios';
import App from './App';
import { axiosDataGetOrders } from './mockData/mockData';

describe(App.name, () => {
  const axiosDataGetItems = {
    data: {
      data: [
        {
          id: 1,
          name: 'apple',
          price: 120,
          count: 20,
          category: 'Fruits & Vegatables',
        },
      ],
    },

  };
  beforeEach(() => {
    jest.spyOn(axios, 'get')
      .mockResolvedValueOnce(
        axiosDataGetItems,
      )
      .mockResolvedValueOnce(axiosDataGetOrders)
      .mockResolvedValueOnce(null);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should match the snapshot', async () => {
    const { container } = await waitFor(() => render(<App />));
    expect(container).toMatchSnapshot();
  });

  test('should render a component Home', async () => {
    await waitFor(() => render(<App />));
    const clickEshopper = screen.getByText('E-shopper');
    fireEvent.click(clickEshopper);
    expect(document.location.href).toBe('http://localhost/');
  });
  test('should render component cart', async () => {
    await waitFor(() => render(<App />));
    const clickMyBasket = screen.getByTestId('cart-test-nav');
    fireEvent.click(clickMyBasket);
    expect(document.location.href).toBe('http://localhost/cart');
  });
  test('should increment cart count', async () => {
    await waitFor(() => render(<App />));
    const clickEshopper = screen.getByText('E-shopper');
    act(() => { fireEvent.click(clickEshopper); });
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
  });
});
