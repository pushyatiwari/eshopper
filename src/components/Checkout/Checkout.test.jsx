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
  test('should set the email', () => {
    render(<Checkout />);
    const nameInput = screen.getByTestId('input-name');
    fireEvent.change(nameInput, { target: { value: 'pushyatiwari@gmail.com' } });
    expect(nameInput.value).toBe('pushyatiwari@gmail.com');
  });
  test('should set the phone', () => {
    render(<Checkout />);
    const nameInput = screen.getByTestId('input-email');
    fireEvent.change(nameInput, { target: { value: 'pushyatiwari@gmail.com' } });
    expect(nameInput.value).toBe('pushyatiwari@gmail.com');
  });
  test('should set the number', () => {
    render(<Checkout />);
    const nameInput = screen.getByTestId('input-phone');
    fireEvent.change(nameInput, { target: { value: '9846473809' } });
    expect(nameInput.value).toBe('9846473809');
  });
  test('should be called with', () => {
    const checkoutContainer = render(<Checkout />);
    expect(checkoutContainer).toMatchSnapshot();
  });
});
