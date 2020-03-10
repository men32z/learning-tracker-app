import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Time from '../helpers/Time';
import Circle from 'react-circle';
import { colors } from '../data/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* eslint-disable-next-line */
import { library } from '../assets/plugins/fas.js';

export default function Measurement({ measurement: { units, date_m, id } }) {
  const style = {
    font: 'bold 7rem Helvetica, Arial, sans-serif',
  };
  let progress = Math.floor((units * 100) / 60);
  progress = progress < 100? progress : 100;
  return (
    <Link to={`/measurements/${id}`} className="subject-list-item bg-white">
      <div className="measurement-circle">
        <Circle
          responsive={true}
          progress={progress} // here 60 is the goal
          progressColor="#8EE289"
          textStyle={style}
          textColor={colors.grayDark}
        />
      </div>
      <div className="measurement-date">
        <span>{Time.format(date_m)}</span>
      </div>
      <div className="measurement-right-menu">
        <span>{units}</span><span>Minutes</span>

          <FontAwesomeIcon icon={['fas', 'angle-right']} />
      </div>
    </Link>
  );
}

Measurement.propTypes = {
  measurement: PropTypes.shape({
    id: PropTypes.number,
    units: PropTypes.number,
    date_m: PropTypes.string,
  }).isRequired,
};
