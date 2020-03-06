import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {library} from '../assets/plugins/fas.js';

export default function Menu(){
  return (
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
          <Link to="/signout">
            <FontAwesomeIcon icon={['fas', 'sign-out-alt']} />
            <span>Log Out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}