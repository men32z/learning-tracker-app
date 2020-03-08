import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* eslint-disable-next-line */
import { library } from '../assets/plugins/fas.js';

export default function Subject({subject: {image, name}}) {
  return (
    <div className="subject-list-item bg-white">
      <div>
        <FontAwesomeIcon icon={image.split(' ')} />
      </div>
      <div>
        <div><span>{name}</span></div>
      </div>
    </div>
  );
}

Subject.propTypes = {
  subject: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
};
