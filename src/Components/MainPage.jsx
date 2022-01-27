import * as React from 'react';
import { useState } from 'react';
import FlashcardContainer from './FlashcardContainer.jsx';

const MainPage = () => {
  const openForm = () => {};

  const closeForm = () => {
    document.getElementById('myForm').style.display = 'none';
  };

  const onSubmitClick = (e) => {
    fetch('/create', {
      method: 'POST',
      body: JSON.stringify({
        algoName: document.getElementById('algoName').value,
        algoPrompt: document.getElementById('algoPrompt').value,
        algoEx: document.getElementById('algoExample').value,
        algoType: document.getElementById('algoType').value,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((data) => console.log(data))
      .catch((err) => console.log('error from fetch', err));
    e.preventDefault();
  };

  return (
    <div className="header">
      <h1 className="main">Time to Study ALGOS!</h1>
      <div className="modal" id="create">
        <div className="modal-content">
          <a href="#close" className="close-link">
            X
          </a>
          <form
            className="form-container"
            id="form-container"
            onSubmit={onSubmitClick}
          >
            <h1>Create flashcard</h1>
            <label htmlFor="algoName">
              <b>Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Algorithm Name"
              name="algoName"
              id="algoName"
            />
            <label htmlFor="algoPrompt">
              <b>Prompt</b>
            </label>
            <input
              type="text"
              placeholder="Enter Algorithm Prompt"
              name="algoPrompt"
              id="algoPrompt"
            />
            <label htmlFor="algoExample">
              <b>Example</b>
            </label>
            <input
              type="text"
              placeholder="Enter Algorithm Example"
              name="algoExample"
              id="algoExample"
            />
            <label htmlFor="algoType">
              <b>Type</b>
            </label>
            <input
              type="text"
              placeholder="Enter Algorithm Type"
              name="algoType"
              id="algoType"
            />
            <button type="reset" className="btn btn-cancel popup-btn">
              Reset
            </button>
            <button type="submit" className="btn btn-primary popup-btn">
              Create
            </button>
          </form>
        </div>
        <a href="#close" className="background"></a>
      </div>
      <a className="btn btn-primary btn-large" href="#create">
        Create New Flashcard
      </a>
      <br />
      <br />
      <FlashcardContainer />
    </div>
  );
};

export default MainPage;
