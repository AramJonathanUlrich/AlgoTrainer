import * as React from 'react';
// import FlashcardContainer from "./Components/FlashcardContainer.jsx";
import Login from './Components/Login.jsx';
import { Routes, Route, Link } from 'react-router-dom';
import FlashcardContainer from './Components/FlashcardContainer.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="mainpage" element={<FlashcardContainer />} />
    </Routes>
    // <Login />
  );
};

export default App;
