import React from 'react';
import { render, } from '@testing-library/react';
import App from './App';

test('renders the endurance equation', () => {
  const { container } = render(<App />);
  expect(container.querySelector('[id="endurance-equation"]')).not.toBe(null);
  expect(container.querySelector('[id="monthly-payment-equation"]')).not.toBe(null);
});

