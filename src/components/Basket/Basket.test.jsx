import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import React from 'react';
import Basket from './Basket';

describe(Basket.name, () => {
  const mockFunction = {
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
  };
  const description = {
    id: 'b2',
    name: 'melon',
    price: 40,
    count: 0,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRhOqYV2NWv0m80WzwGG2fCz6c3PzHmpz1Dg&usqp=CAU',

  };
  test('should be called with', () => {
    render(<Basket
      description={description}
      onIncrement={mockFunction.onIncrement}
      onDecrement={mockFunction.onDecrement}
    />);
    const onIncrementButton = screen.getByText('+');
    fireEvent.click(onIncrementButton);
    expect(mockFunction.onIncrement).toHaveBeenCalled();
  });
});
