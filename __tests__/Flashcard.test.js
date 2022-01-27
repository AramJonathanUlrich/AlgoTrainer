import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Flashcard from '../src/Components/Flashcard';
import userEvent from '@testing-library/user-event';
import regeneratorRuntime from "regenerator-runtime";

describe('Flashcard', () => {
  test('renders Flashcard component with props', () => {
    const algoCard = {
      algoName: 'name',
      algoPrompt: 'prompt',
      algoExample: 'example',
      algoType: 'type'
    }
    const onClick = jest.fn();
    render(<Flashcard algoCard={algoCard} deleteCard={onClick}/>)

    // check for buttons
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('X')).toBeInTheDocument();

    // check for html elements with text
    expect(screen.getByText('name')).toBeInTheDocument()
    expect(screen.getByText('Algo Prompt: prompt')).toBeInTheDocument()
    expect(screen.getByText('Algo Example: example')).toBeInTheDocument()
    expect(screen.getByText('Algo Type: type')).toBeInTheDocument()
  });

  test('calls "onClick" prop on delete button click', async () => {
    const algoCard = {
      algoName: 'name',
      algoPrompt: 'prompt',
      algoExample: 'example',
      algoType: 'type'
    }
    const onClick = jest.fn();
    render(<Flashcard algoCard={algoCard} deleteCard={onClick}/>)

    await userEvent.click(screen.getByText('X'));
    expect(screen.getByText('X')).toBeInTheDocument();

    // Wait until the callback does not throw an error. In this case, that means
    // it'll wait until the mock function has been called once.
    await waitFor(() => expect(onClick).toHaveBeenCalledTimes(1))
  });
});