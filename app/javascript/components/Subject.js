import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* eslint-disable-next-line */
import { library } from '../assets/plugins/fas.js';

export default function Subject({ subject: { image, name, id }, handleClick, mySubjects }) {
  return (
    <div className="subject-list-item bg-white">
      <div>
        <FontAwesomeIcon icon={image.split(' ')} />
      </div>
      <div>
        <div><span>{name}</span></div>
      </div>
      {
        mySubjects.includes(id) ? '' : (
          <div style={{ marginLeft: 'auto' }}>
            <button
              type="button"
              className="button-green"
              onClick={() => handleClick(id)}
            >
              Register
            </button>
          </div>
        )
      }
    </div>
  );
}

Subject.propTypes = {
  mySubjects: PropTypes.arrayOf(PropTypes.number).isRequired,
  subject: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};
