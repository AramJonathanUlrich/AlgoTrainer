// describe('Test suite just to make this pass', () => {
//   it('My Test Case', () => {
//     expect(true).toEqual(true);
//   });
// });

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../src/App';

describe('App & React Router Integration Testing', () => {
  test('full app rendering/navigating', () => {
    render(<App />)
    expect(screen.getByRole('form')).toBeInTheDocument()

    userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  // // serves an error no match page
  // test('landing on a bad page', () => {
  //   renderWithRouter(<App />, {route: '/something-that-does-not-match'})

  //   expect(screen.getByText(/no match/i)).toBeInTheDocument()
  // })
});

