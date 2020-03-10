import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MySubject from './MySubject';
import { mySubjectsThunk } from '../thunks/subjects';
import { myMeasurementsThunk } from '../thunks/measurements';


function MySubjects({
  subjects, fetchSubjects, measurements, fetchMesasurements, date,
}) {
  useEffect(() => {
    fetchSubjects();
    fetchMesasurements(date);
  }, [date]);

  return (
    <div className="row">
      <div className="home-subjects">
        {subjects.map(x => (
          <MySubject
            key={x.id}
            subject={x}
            measurements={measurements.filter(y => y.subject_id === x.id)}
          />
        ))}
      </div>
    </div>
  );
}

MySubjects.propTypes = {
  date: PropTypes.string.isRequired,
  subjects: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchSubjects: PropTypes.func.isRequired,
  measurements: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchMesasurements: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  subjects: state.subject.mySubjects,
  measurements: state.measurement.myMeasurements,
});

const mapDispatchToProps = dispatch => ({
  fetchSubjects: () => dispatch(mySubjectsThunk()),
  fetchMesasurements: date => dispatch(myMeasurementsThunk(date)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MySubjects));
