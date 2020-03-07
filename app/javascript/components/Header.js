import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

function Header({isLogged}){
  return !isLogged ? '' : (
    <div className="header">
      <h1> Title </h1>
    </div>
  );
}

const mapStateToProps = state => ({isLogged: state.auth.isLogged})

export default withRouter(connect(mapStateToProps)(Header))