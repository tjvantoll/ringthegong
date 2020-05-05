// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';
import { getLargestItem } from './sample';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('has empty state on load', () => {
  expect(true).toBe(false);
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

// const { getByText } = render(<App />);
// const linkElement = getByText(/learn react/i);
// expect(linkElement).toBeInTheDocument();