import * as React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

const Login = () => {
  return (
    // <div>
    //   <nav>
    //     <Link to="mainpage">Flashcards Container</Link>
    //   </nav>
    // </div>
    <div className="login" style={{ textAlign: 'center' }}>
      <form action="/mainpage">
        <label for="username">Username:</label>
        <br />
        <input type="text" id="username" name="username"></input>
        <br />
        <label for="password">Password:</label>
        <br />
        <input type="text" id="password" name="password"></input>
        <br />
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default Login;
