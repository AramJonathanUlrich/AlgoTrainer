import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import MainPage from './Components/MainPage.jsx';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/mainpage" element={<MainPage />}>
        <Route path="/mainpage/" element={<MainPage />} />
      </Route>
      <Route path="*" element={<MainPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
