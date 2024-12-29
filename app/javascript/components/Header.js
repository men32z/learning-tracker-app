import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* eslint-disable-next-line */
import { library } from '../assets/plugins/fas.js';

function Header({ isLogged }) {
  const { pathname } = useLocation();
  const addMeasure = !pathname.match(/my-subject/) ? '' : (
    <div className="add-measure-button">
      <Link to="/measurements/new">
        <FontAwesomeIcon icon={['fas', 'plus']} />
      </Link>
    </div>
  );
  return !isLogged ? '' : (
    <div className="header">
      <h1> Keep Learning! </h1>
      {addMeasure}
    </div>
  );
}

const mapStateToProps = state => ({ isLogged: state.auth.isLogged });

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default withRouter(connect(mapStateToProps)(Header));
