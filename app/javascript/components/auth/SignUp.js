import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { cleanAuthMessage } from '../../actions';
import { signUpThunk } from '../../thunks/auth';

// I just use hooks here to practice a bit, a better aproach could be done.
function SignUp({ signUp, errorMessage, cleanAuthMessage }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const showError = !errorMessage ? '' : (
    <span style={{ color: 'red', padding: '15px' }}>{errorMessage}</span>
  );

  function handleOnSubmit(e, obj) {
    e.preventDefault();
    cleanAuthMessage();
    signUp(obj);
  }

  return (
    <div className="bg-dark full-screen">
      <div className="login-form sign-up-form">
        <h2>Sign Up</h2>
        {showError}
        <form onSubmit={e => handleOnSubmit(e, {
          name, email, password, passwordConfirmation,
        })}
        >
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={e => setName(e.target.value)}
            value={name}
            autoComplete="new-name"
            required
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            autoComplete="new-email"
            required
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            autoComplete="new-password"
            required
          />
          <input
            type="password"
            placeholder="password confirmation"
            name="passwordConfirmation"
            onChange={e => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation}
            autoComplete="new-password"
            required
          />
          <input type="submit" className="button" value="Sign Up" />
        </form>
        <div className="bot">
          <span>do you have an account? </span>
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}

SignUp.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  signUp: PropTypes.func.isRequired,
  cleanAuthMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errorMessage: state.auth.message,
});

const mapDispatchToProps = dispatch => ({
  signUp: obj => dispatch(signUpThunk(obj)),
  cleanAuthMessage: () => dispatch(cleanAuthMessage()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
