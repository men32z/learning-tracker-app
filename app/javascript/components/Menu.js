import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {library} from '../assets/plugins/fas.js';
import {logout} from '../actions';
import Storage from '../helpers/Storage';

function Menu({isLogged, logout}){
  return !isLogged ? '' : (
    <nav className="footer">
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={['fas', 'home']} />
            <span>Home</span>
          </Link>
        </li>
        <li className="active">
          <Link to="/subjects">
            <FontAwesomeIcon icon={['fas', 'book']} />
            <span>Subjects</span>
          </Link>
        </li>
        <li>
          <Link to="/measurements/new">
            <FontAwesomeIcon icon={['fas', 'stopwatch']} />
            <span>+ Measure</span>
          </Link>
        </li>
        <li>
          <a href="#" onClick={(e) => {
            e.preventDefault();
            Storage.setToken('');
            logout();
          }}>
            <FontAwesomeIcon icon={['fas', 'sign-out-alt']} />
            <span>Log Out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

const mapStateToProps = state => ({isLogged: state.auth.isLogged})
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu))