import React from 'react';
import {Link} from 'react-router-dom';

export default function Signin(){
  function handleOnSubmit(e){
    e.preventDefault();
  }
  return (
    <div className="bg-dark full-screen">
      <div className="login-form signin-form">
        <h2>Sign In</h2>
        <form onSubmit={handleOnSubmit}>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="password confirmation" />
          <input type="submit" className="button" value="Log In" />
        </form>
        <div className="bot">
          <span>do you have an account? </span>
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}