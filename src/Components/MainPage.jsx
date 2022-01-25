import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlashcardContainer from './FlashcardContainer.jsx';
import '../styles/style.css';

const MainPage = () => {
  let navigate = useNavigate();

  const openForm = () => {
    document.getElementById('myForm').style.display = 'block';
  };

  const closeForm = () => {
    document.getElementById('myForm').style.display = 'none';
  };

  return (
    <div>
      <h1>Welcome (insert user's name here)</h1>
      <div className="form-popup" id="myForm">
        <form
          className="form-container"
          id="form-container"
          onSubmit={(e) => {
            fetch('/create', {
              method: 'POST',
              body: JSON.stringify({
                algoName: document.getElementById('algoName').value,
                algoPromp: document.getElementById('algoPrompt').value,
                algoExample: document.getElementById('algoExample').value,
                algoType: document.getElementById('algoType').value,
              }),
              headers: { 'Content-Type': 'application/json' },
            })
              .then((res) => res.json())
              .then((data) => console.log(data))
              .catch((err) => console.log(err));
            e.preventDefault();
          }}
        >
          <h1>Create flashcard</h1>
          <label htmlFor="algoName">
            <b>Algorithm Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Algorithm Name"
            name="algoName"
          />
          <label htmlFor="algoPrompt">
            <b>Algorithm Prompt</b>
          </label>
          <input
            type="text"
            placeholder="Enter Algorithm Prompt"
            name="algoPrompt"
          />
          <label htmlFor="algoExample">
            <b>Algorithm Example</b>
          </label>
          <input
            type="text"
            placeholder="Enter Algorithm Example"
            name="algoExample"
          />
          <label htmlFor="algoType">
            <b>Algorithm Type</b>
          </label>
          <input
            type="text"
            placeholder="Enter Algorithm Type"
            name="algoType"
          />
          <button type="submit" className="btn">
            Create
          </button>
          <button type="reset" className="btn_cancel" onClick={closeForm}>
            Discard
          </button>
        </form>
      </div>
      <button type="button" onClick={openForm}>
        Create a new flashcard
      </button>
      <FlashcardContainer />
    </div>
  );
};

export default MainPage;
