/* this comment is to save file deploy*/
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { cleanAuthMessage } from '../../actions';
import { logInThunk } from '../../thunks/auth';

// I just use hooks here to practice a bit, a better aproach could be done.
function LogIn({ logIn, errorMessage, cleanAuthMessage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const showError = !errorMessage ? '' : (
    <span style={{ color: 'red', padding: '15px' }}>{errorMessage}</span>
  );

  function handleOnSubmit(e, obj) {
    e.preventDefault();
    cleanAuthMessage();
    logIn(obj);
  }

  return (
    <div className="bg-dark full-screen">
      <div className="login-form">
        <h2>Log In</h2>
        {showError}
        <form onSubmit={e => handleOnSubmit(e, { email, password })}>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            autoComplete="email"
            required
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            autoComplete="password"
            required
          />
          <input className="button" type="submit" value="Log In" />
        </form>
        <div className="bot">
          <span>Not a member?</span>
          <Link to="/signup">Create an account</Link>
        </div>
      </div>
    </div>
  );
}

LogIn.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  logIn: PropTypes.func.isRequired,
  cleanAuthMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errorMessage: state.auth.message,
});

const mapDispatchToProps = dispatch => ({
  logIn: obj => dispatch(logInThunk(obj)),
  cleanAuthMessage: () => dispatch(cleanAuthMessage()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogIn));
