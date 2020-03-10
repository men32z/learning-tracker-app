import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* eslint-disable-next-line */
import { library } from '../assets/plugins/fas.js';

export default function MySubject({ subject: { image, name, id }, measurements }) {
  return (
    <Link to={`/my-subject/${id}`} className="home-subject bg-white">
      <div>
        <FontAwesomeIcon icon={image.split(' ')} />
      </div>
      <div>
        <div><span>{name}</span></div>
        <div className="home-subject-text">
          <span>{measurements.reduce(((a, b) => a + b.units), 0)}</span>
          <span>Minutes</span>
        </div>
      </div>
    </Link>
  );
}

MySubject.propTypes = {
  subject: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  measurements: PropTypes.arrayOf(PropTypes.object).isRequired,
};
