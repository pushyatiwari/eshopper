// eslint-disable-next-line no-unused-vars
import {
  render, screen, fireEvent, waitFor, act,
} from '@testing-library/react';
import React from 'react';
import axios from 'axios';
import App from './App';

describe(App.name, () => {
  beforeEach(() => {
    const mockResolveItems = {
      data: [
        {
          id: 1,
          name: 'apple',
          price: 120,
          count: 20,
          category: 'Fruits & Vegatables',
        }],
    };
    const mockResolveOrders = [
      {
        id: 1,
        name: 'apple',
        manufacturer: 'FreshO',
        unitPrice: 120,
        imageUrl: 'img/fruits/apple.png',
        quantityInBasket: 0,
        quantityAvailable: 20,
        category: 'Fruits & Vegatables',
      },
    ];
    jest.spyOn(axios, 'get')
      .mockResolvedValueOnce(
        mockResolveItems,
      )
      .mockResolvedValueOnce(mockResolveOrders)
      .mockResolvedValueOnce(null);
  });
  test('should set the name', async () => {
    render(<App />);
  });

  test('should render a component Home', async () => {
    await waitFor(() => render(<App />));
    const clickEshopper = screen.getByText('E-shopper');
    act(() => fireEvent.click(clickEshopper));
    screen.getByTestId('home-route');
    screen.logTestingPlaygroundURL();
    expect(document.location.href).toBe('http://localhost/');
  });
});
