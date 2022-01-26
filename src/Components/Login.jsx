import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("mainpage");
  };

  return (
    <div className="login">
      <h1>Login</h1>
        <form name="login-form" onSubmit={handleSubmit}>
          <input type="text" id="username" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
        </form>
    </div>

  )
}

export default Login;