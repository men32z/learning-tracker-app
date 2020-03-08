import React from 'react';
import {connect} from 'react-redux';
import {Switch, withRouter } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from '../temporalViews/Home';
import LogIn from '../auth/LogIn';
import SignUp from '../auth/SignUp';

function Routes({isLogged}) {
  return (
    <Switch>
       <PrivateRoute exact path="/" isLogged={isLogged}>
         <Home />
       </PrivateRoute>
       <PrivateRoute path="/login" isLogged={isLogged} inverse={true}>
         <LogIn />
       </PrivateRoute>
       <PrivateRoute path="/signup" isLogged={isLogged} inverse={true}>
         <SignUp />
       </PrivateRoute>
     </Switch>
  );
}
const mapStateToProps = state => ({isLogged: state.auth.isLogged})
export default withRouter(connect(mapStateToProps)(Routes))