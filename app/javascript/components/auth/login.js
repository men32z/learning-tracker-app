import React from 'react';

export default function Login(){
  function handleOnSubmit(e){
    e.preventDefault();
  }
  return (
    <div className="bg-dark full-screen">
      <div className="login-form">
        <h2>Log In</h2>
        <form onSubmit={handleOnSubmit}>
          <input type="email" />
          <input type="password" />
          <input className="button" type="submit" value="Log In" />
        </form>
        <div className="bot">
          <span>Not a member?</span>
          <a href="#"> Create an account</a>
        </div>
      </div>
    </div>
  );
}