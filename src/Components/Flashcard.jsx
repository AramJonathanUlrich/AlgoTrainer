import React, { useState, useEffect } from 'react';

const Flashcard = (props) => {

  return (
    <div id="flashcard">
      <div id="buttons">
        <button type="button" className="btn btn-primary btn-block btn-large">Edit</button>
        <button type="button" className="btn btn-primary btn-block btn-large" name={props.name} onClick={props.deleteCard}>X</button>
      </div>
      <div className="flashcard-info">
        <h3>{props.algoCard.algoname}</h3>
        <ul>
          <li>Algo Prompt: {props.algoCard.algoprompt}</li>
          <li>Algo Example: {props.algoCard.algoex}</li>
          <li>Algo Type: {props.algoCard.algotype}</li>
        </ul>
      </div>
    </div>
  );
};

export default Flashcard;
