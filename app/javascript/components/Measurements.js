import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { withRouter } from 'react-router-dom';
import { measurementsThunk } from '../thunks/measurements';


function Measurements({ measurements, fetchMeasurements }) {
  const { id } = useParams();
  useEffect(() => {
    fetchMeasurements(id);
  }, []);

  return (
    <div>
      {measurements.map(x => (<div key={x.id}>{x.id}</div>))}
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
