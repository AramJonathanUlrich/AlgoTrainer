import React, { useEffect, useState } from 'react';
import Flashcard from './Flashcard.jsx';

const FlashcardContainer = () => {
  const [algoCards, setAlgoCards] = useState([]);

  useEffect(() => {
    fetch('/flashcards')
      .then((data) => data.json())
      .then((response) => {
        setAlgoCards(response);
      });
  });

  const deleteCard = (e) => {
    const id = e.target.name;
    const stateArray = algoCards;
    const removedElem = stateArray.splice(Number(id), 1);
    setAlgoCards(stateArray);
    fetch('/delete/' + removedElem[0].algoName, {
    method: "DELETE",
    })
    .then((data) => console.log(data))
    .catch((err) => console.log('there was an error: ', err));
  }

  const updateCard = (e) => {
    const id = e.target.name;
    fetch('/update/' + algoCards[Number(id)].algoName, {
    method: "PATCH",
    })
    .then((data) => console.log(data))
    .catch((err) => console.log('there was an error: ', err));
  }

  const flashcards = [];
  for (let i = 0; i < algoCards.length; i += 1) {
    flashcards.push(<Flashcard key={i} name={i} algoCard={algoCards[i]} deleteCard={deleteCard}/>);
  }

  return (
    <div className="flashcard-container" style={{ border: '1px solid black' }}>
      {flashcards}
    </div>
  );
};

export default FlashcardContainer;
