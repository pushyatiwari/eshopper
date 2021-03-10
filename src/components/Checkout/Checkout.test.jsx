import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Checkout from './Checkout';

describe(Checkout.name, () => {
  test('should set the name', () => {
    render(<Checkout />);
    const nameInput = screen.getByTestId('input-name');
    fireEvent.change(nameInput, { target: { value: 'pushya' } });
    expect(nameInput.value).toBe('pushya');
  });
//   test('should set the email', () => {
//     render(<Checkout />);
//     const nameInput = screen.getByTestId('input-name');
//     fireEvent.change(nameInput, { target: { value: 'pushya' } });
//     expect(nameInput.value).toBe('pushya');
//   });
});
