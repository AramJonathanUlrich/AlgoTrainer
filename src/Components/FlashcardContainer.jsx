import React, { useEffect, useState } from 'react';
import Flashcard from './Flashcard.jsx';

const FlashcardContainer = () => {
  const [algoCards, setAlgoCards] = useState([
    {
      algoName: 'Two-Sum',
      algoPrompt: `Given an array of integers, return indices of the two numbers such that they add up to a specific target. 
    You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
      algoExample: `Given nums = [2, 7, 11, 15], target = 9,
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].`,
      algoType: 'easy',
    },
  ]);

  useEffect(() => {
    fetch('/flashcards')
      .then((data) => data.json())
      .then((response) => {
        setAlgoCards(response);
      });
  });

  const flashcards = [];
  for (let i = 0; i < algoCards.length; i += 1) {
    flashcards.push(<Flashcard key={i} name={i} algoCard={algoCards[i]} />);
  }

  return (
    <div className="flashcard-container" style={{ border: '1px solid black' }}>
      {flashcards}
    </div>
  );
};

export default FlashcardContainer;
