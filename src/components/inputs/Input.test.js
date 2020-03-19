import React from 'react';
import {render, screen} from '@testing-library/react'

import Input from './Input';
import MoneyInput from './Money';

describe('Input.js', () => {
  test('returns a money component', () => {
    const label = "the bail man";
    render(<Input name="test" config={{ label, type: "currency" }} value={10} />);
    expect(screen.getByLabelText(label));
  });
});
