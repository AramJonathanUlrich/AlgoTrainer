import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Flashcard from '../src/Components/Flashcard';
import userEvent from '@testing-library/user-event';
import regeneratorRuntime from "regenerator-runtime";

describe('Flashcard', () => {
  // // ERROR: onClick is undefined in line 58 if beforeEach is used
  // beforeEach(() => {
  //   const algoCard = {
  //     algoName: 'name',
  //     algoPrompt: 'prompt',
  //     algoExample: 'example',
  //     algoType: 'type'
  //   }
  //   const onClick = jest.fn();
  //   render(<Flashcard algoCard={algoCard} deleteCard={onClick}/>)
  // });

  test('renders Flashcard component with props', () => {
    // // assertion to force test to pass
    // expect(true).toBe(true);

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

    // {props.algoCard.algoName}
    expect(screen.getByText('name')).toBeInTheDocument()
    // Algo Prompt: {props.algoCard.algoPrompt}
    expect(screen.getByText('Algo Prompt: prompt')).toBeInTheDocument()
    // Algo Example: {props.algoCard.algoExample}
    expect(screen.getByText('Algo Example: example')).toBeInTheDocument()
    // Algo Type: {props.algoCard.algoType}
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

    userEvent.click(screen.getByText('X'));
    expect(screen.getByText('X')).toBeInTheDocument();
    // ...
    // Wait until the callback does not throw an error. In this case, that means
    // it'll wait until the mock function has been called once.
    await waitFor(() => expect(onClick).toHaveBeenCalledTimes(1))
    // ...
  });

  // test('calling render with the same component on the same container does not remount', () => {
  //   const {rerender} = render(<NumberDisplay number={1} />)
  //   expect(screen.getByTestId('number-display')).toHaveTextContent('1')
  
  //   // re-render the same component with different props
  //   rerender(<NumberDisplay number={2} />)
  //   expect(screen.getByTestId('number-display')).toHaveTextContent('2')
  
  //   expect(screen.getByTestId('instance-id')).toHaveTextContent('1')
  // })
});