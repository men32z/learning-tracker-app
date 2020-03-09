import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* eslint-disable-next-line */
import { library } from '../assets/plugins/fas.js';

export default function MySubject({subject: {image, name}, measurements}){
  return (
    <a className="home-subject bg-white">
      <div>
        <FontAwesomeIcon icon={image.split(' ')} />
      </div>
      <div>
        <div><span>{name}</span></div>
        <div className="home-subject-text">
          <span>{measurements.reduce(((a,b) => a + b.units),0)}</span>
          <span>Minutes</span>
        </div>
      </div>
    </a>
  );
}

MySubject.propTypes = {
  subject: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  measurements: PropTypes.arrayOf(PropTypes.object),
};