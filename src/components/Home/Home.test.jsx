import {
  render, screen, waitFor,
} from '@testing-library/react';
import React from 'react';
import Home from './Home';

describe(Home.name, () => {
  const mockFunction = {
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
  };
  const mockData = {
    'Fruits & Vegatables': [{
      category: 'Fruits & Vegatables', count: 20, countInCart: 0, id: 1, name: 'apple', price: 120, src: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    }],
    'Household Items': [{
      category: 'Household Items', count: 3, countInCart: 0, id: 2, name: 'table cloth', price: 200, src: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    }],
  };

  test('should render Home', async () => {
    const renderHome = render(
      <Home
        description={mockData}
        onIncrement={mockFunction.onIncrement}
        onDecrement={mockFunction.onDecrement}
      />,
    );
    expect(renderHome).toMatchSnapshot();
  });
});
