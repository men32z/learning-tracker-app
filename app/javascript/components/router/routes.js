import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, withRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../temporalViews/Home';
import Subjects from '../Subjects';
import LogIn from '../auth/LogIn';
import SignUp from '../auth/SignUp';

function Routes({ isLogged }) {
  return (
    <Switch>
      <PrivateRoute exact path="/" isLogged={isLogged}>
        <Home />
      </PrivateRoute>
      <PrivateRoute exact path="/subjects" isLogged={isLogged}>
        <Subjects />
      </PrivateRoute>
      <PrivateRoute path="/login" isLogged={isLogged} inverse>
        <LogIn />
      </PrivateRoute>
      <PrivateRoute path="/signup" isLogged={isLogged} inverse>
        <SignUp />
      </PrivateRoute>
    </Switch>
  );
}

Routes.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({ isLogged: state.auth.isLogged });
export default withRouter(connect(mapStateToProps)(Routes));
