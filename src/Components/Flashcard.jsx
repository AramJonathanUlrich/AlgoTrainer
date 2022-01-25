import React, { useState, useEffect } from 'react';

const Flashcard = (props) => {

  return (
    <div id="flashcard">
      <h3>{props.algoCard.algoName}</h3>
      <ul>
        <li>Algo Prompt: {props.algoCard.algoPrompt}</li>
        <li>Algo Example: {props.algoCard.algoExample}</li>
        <li>Algo Type: {props.algoCard.algoType}</li>
      </ul>
    </div>
  );
};

export default Flashcard;
