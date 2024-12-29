import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { withRouter } from 'react-router-dom';
import Time from '../helpers/Time';
import { measurementsThunk } from '../thunks/measurements';
import Measurement from './Measurement';


function Measurements({ measurements, fetchMeasurements }) {
  const { id } = useParams();
  useEffect(() => {
    fetchMeasurements(id);
  }, []);
  const timeToday = Time.today();
  const timeYesterday = Time.yesterday(timeToday);
  const today = measurements.filter(x => x.date_m === timeToday);
  const yesterday = measurements.filter(x => x.date_m === timeYesterday);
  const lastWeek = measurements.filter(x => x.date_m !== timeToday && x.date_m !== timeYesterday)
    .sort((a, b) => Time.ts(b.date_m) - Time.ts(a.date_m));
  const noRecords = (
    <div className="subject-list-item bg-white" style={{ height: '60px', padding: '10px' }}>
      No records jet.
    </div>
  );
  return (
    <div className="bg-gray full-screen">
      <div className="row">
        <div className="measurements-title"><span>Today</span></div>
        <div className="subjects-list">
          {today.length > 0
            ? today.map(x => <Measurement key={x.id} measurement={x} />)
            : noRecords}
        </div>
        <div className="measurements-title"><span>Yesterday</span></div>
        <div className="subjects-list">
          {yesterday.length > 0
            ? yesterday.map(x => <Measurement key={x.id} measurement={x} />)
            : noRecords}
        </div>
        <div className="measurements-title"><span>Last week</span></div>
        <div className="subjects-list last-div">
          {lastWeek.length > 0
            ? lastWeek.map(x => <Measurement key={x.id} measurement={x} />)
            : noRecords}
        </div>
      </div>
    </div>
  );
}

Measurements.propTypes = {
  measurements: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchMeasurements: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  measurements: state.measurement.myMeasurements,
});

const mapDispatchToProps = dispatch => ({
  fetchMeasurements: id => dispatch(measurementsThunk(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Measurements));
