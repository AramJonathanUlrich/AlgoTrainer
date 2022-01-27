import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../src/App';

describe('App & React Router Integration Testing', () => {
  test('full app rendering/navigating', () => {
    render(<App />)
    expect(screen.getByRole('button')).toBeInTheDocument()

    userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('form')).toBeInTheDocument()
  })
});

