import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  let navigate = useNavigate();

  const handleSubmit = () => {
    fetch('/login', {
      method: "POST",
      body: JSON.stringify({
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
      }),
      headers: {'Content-Type': 'application/json'}
    }).then((response) => response.json())
    .then((data) => {
      if(data) {
        navigate('mainpage');
      } else {
        alert('wrong password');
      }
    })
    .catch((err) => {
      console.log(err);
    });
    
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input type="text" id="username" name="username" placeholder="Username" />
      <input type="password" id="password" name="password" placeholder="Password" />
      <button type="submit" className="btn btn-primary btn-block btn-large" onClick={() => handleSubmit()}>Let me in.</button>
    </div>

  )
}

export default Login;