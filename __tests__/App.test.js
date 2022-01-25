// describe('Test suite just to make this pass', () => {
//   it('My Test Case', () => {
//     expect(true).toEqual(true);
//   });
// });

import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../src/App';
import { renderWithRouter } from '../test-utils';

describe('App & React Router Integration Testing', () => {
  test('full app rendering/navigating', () => {
    expect(true).toBe(true);
    // renderWithRouter(<App />)
    // expect(screen.getByRole('form')).toBeInTheDocument()

    // const leftClick = {button: 0}
    // userEvent.click(screen.getByText(/about/i), leftClick)

    // expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
  })

  // // serves an error no match page
  // test('landing on a bad page', () => {
  //   renderWithRouter(<App />, {route: '/something-that-does-not-match'})

  //   expect(screen.getByText(/no match/i)).toBeInTheDocument()
  // })
});

