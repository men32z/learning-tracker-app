import React from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Circle from 'react-circle';
/* eslint-disable-next-line */
import { library } from '../assets/plugins/fas.js';
import { colors } from '../data/styles';

function Statistics({statistics: {minutes, subjects, measurements, loadingSubjects, loadingMeasurements}}){
  const style = {
    font: 'bold 7rem Helvetica, Arial, sans-serif',
  };
  const stats = loadingSubjects && loadingMeasurements ? 'loading..' :  (
    <div className="home-circles">
      <div>
        <Circle
          progress={subjects.goal === 0  ? 100 : Math.floor((subjects.total * 100)/  subjects.goal)}
          progressColor="#8EE289"
          textStyle={style}
          textColor={colors.grayDark}
        />
        <h3>{subjects.name}</h3>
      </div>
      <div>
        <Circle
          progress={measurements.goal === 0  ? 100 : Math.floor((measurements.total * 100)/  measurements.goal)}
          progressColor="#8EE289"
          textStyle={style}
          textColor={colors.grayDark}
        />
        <h3>{measurements.name}</h3>
      </div>
      <div>
        <Circle
          progress={subjects.total === 0  ? 100 : Math.floor((minutes.total * 100)/  (subjects.total * 60))}
          progressColor="#8EE289"
          textStyle={style}
          textColor={colors.grayDark}
        />
        <h3>{minutes.name}</h3>
      </div>
    </div>
  );
  return (
    <div className="bg-white row">
      <div className="home-date">
        <div><FontAwesomeIcon icon={['fas', 'angle-left']} /></div>
        <div><b>7 september 2013</b></div>
        <div><FontAwesomeIcon icon={['fas', 'angle-right']} /></div>
      </div>
      {stats}
    </div>
  );
}

const mapStateToProps = state => ({
  statistics: state.statistics,
});

export default connect(mapStateToProps)(Statistics);