import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Subject from './Subject';
import { subjectsThunk } from '../thunks/subjects';


function Subjects({subjects, fetchSubjects}) {
  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <div className="bg-gray full-screen">
      <div className="row">
        <div className="subjects-list">
          {subjects.map(x => (
              <Subject key={x.id} subject={x} />
            ))}
        </div>
      </div>
    </div>
  );
}

Subjects.propTypes = {
  subjects: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchSubjects: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  subjects: state.subject.subjects,
});

const mapDispatchToProps = dispatch => ({
  fetchSubjects: () => dispatch(subjectsThunk()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Subjects));