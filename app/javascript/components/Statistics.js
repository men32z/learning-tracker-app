import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Circle from 'react-circle';
import { colors } from '../data/styles';

function Statistics({
  statistics: {
    minutes, subjects, measurements, loadingSubjects, loadingMeasurements,
  },
}) {
  const style = {
    font: 'bold 7rem Helvetica, Arial, sans-serif',
  };
  return loadingSubjects && loadingMeasurements ? (
    <div className="home-circles">
      loading..
    </div>
  ) : (
    <div className="home-circles">
      <div>
        <Circle
          progress={subjects.goal === 0 ? 100 : Math.floor((subjects.total * 100) / subjects.goal)}
          progressColor="#8EE289"
          textStyle={style}
          textColor={colors.grayDark}
        />
        <h3>{subjects.name}</h3>
      </div>
      <div>
        <Circle
          progress={measurements.goal === 0 ? 100
            : Math.floor((measurements.total * 100) / measurements.goal)}
          progressColor="#8EE289"
          textStyle={style}
          textColor={colors.grayDark}
        />
        <h3>{measurements.name}</h3>
      </div>
      <div>
        <Circle
          progress={subjects.total === 0 ? 100
            : Math.floor((minutes.total * 100) / (subjects.total * 60))}
          progressColor="#8EE289"
          textStyle={style}
          textColor={colors.grayDark}
        />
        <h3>{minutes.name}</h3>
      </div>
    </div>
  );
}

Statistics.propTypes = {
  statistics: PropTypes.shape({
    minutes: PropTypes.object,
    subjects: PropTypes.object,
    measurements: PropTypes.object,
    loadingSubjects: PropTypes.bool,
    loadingMeasurements: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  statistics: state.statistics,
});

export default connect(mapStateToProps)(Statistics);
