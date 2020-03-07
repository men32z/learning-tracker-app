import React from 'react';
import {connect} from 'react-redux';
import {Switch, withRouter } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from '../temporalViews/Home';
import Login from '../auth/login';
import Signin from '../auth/signin';

function Routes({isLogged}) {
  return (
    <Switch>
       <PrivateRoute exact path="/" isLogged={isLogged}>
         <Home />
       </PrivateRoute>
       <PrivateRoute path="/login" isLogged={isLogged} inverse={true}>
         <Login />
       </PrivateRoute>
       <PrivateRoute path="/signin" isLogged={isLogged} inverse={true}>
         <Signin />
       </PrivateRoute>
     </Switch>
  );
}
const mapStateToProps = state => ({isLogged: state.auth.isLogged})
export default withRouter(connect(mapStateToProps)(Routes))