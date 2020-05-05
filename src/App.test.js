import App from './App';
import { render } from '@testing-library/react';
import { getLargestItem } from './sample';
import React from 'react';
//import ReactDOM from 'react-dom';

it('has empty state on load', () => {
  const { getByText } = render(<App />);
  const hElement = getByText(/Error retrieving data/i);
  expect(hElement).toBeInTheDocument();
});

test('kata', () => {

  let cart = [
    { name: "Soda", price: 3.12 },
    { name: "Margarita", price: 12.99 },
    { name: "Beer", price: 6.50 }
  ];
  
  let result = getLargestItem(cart);
  let largestItem = { name: "Margarita", price: 12.99 };
  
  expect(result).toStrictEqual(largestItem);
  
});

