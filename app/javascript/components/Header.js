import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Header({ isLogged }) {
  return !isLogged ? '' : (
    <div className="header">
      <h1> Title </h1>
    </div>
  );
}

const mapStateToProps = state => ({ isLogged: state.auth.isLogged });

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default withRouter(connect(mapStateToProps)(Header));
