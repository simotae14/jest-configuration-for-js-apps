import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../calculator';

test('the clear button switches from AC to C when there is an entry', () => {
  const { getByText } = render(<Calculator />);
  const clearButton = getByText('AC');

  // click the button 3
  fireEvent.click(getByText(/3/));
  expect(clearButton).toHaveTextContent('C');

  // click the reset button
  fireEvent.click(clearButton);
  expect(clearButton).toHaveTextContent('AC');
})