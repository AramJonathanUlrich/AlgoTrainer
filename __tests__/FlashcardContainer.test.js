import React from 'react';
import { render, screen } from '@testing-library/react';
import FlashcardContainer from '../src/Components/FlashcardContainer';



describe('FlashcardContainer', () => {
  test('renders FlashcardContainer component', () => {
    render(<FlashcardContainer />);

    expect(screen.getByRole('img')).toBeVisible();
    expect(screen.getByAltText('jigglypuff')).toBeInTheDocument();
  });
});