import * as React from 'react';
// import FlashcardContainer from "./Components/FlashcardContainer.jsx";
// import Login from './Components/Login.jsx';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import FlashcardContainer from './Components/FlashcardContainer.jsx';

const App = () => {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('mainpage');
  }


  return (
    <div style={{textAlign: 'center'}}>
      <h2>Welcome to the app</h2>
      <h3>Login below to continue</h3>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <br />
          <input type="text" id="username" name="username"></input>
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input type="text" id="password" name="password"></input>
          <br />
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
};

export default App;
