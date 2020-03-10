import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CircleSlider } from 'react-circle-slider';
import Time from '../helpers/Time';
import { newMeasure } from '../actions';
import {
  measureThunk, fetchMeasureThunk,
  deleteMeasureThunk, updateMeasureThunk,
} from '../thunks/measurements';
import { mySubjectsThunk } from '../thunks/subjects';

class Measure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      subjectId: null,
      date: Time.today(),
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentDidMount() {
    const {
      match, fetchMeasure, fetchSubjects, newMeasure,
    } = this.props;
    if (match.path === '/measurements/new') {
      newMeasure();
      if (match.params.subjectId) {
        this.setState({ subjectId: match.params.subjectId });
      } else {
        fetchSubjects();
      }
    } else {
      fetchMeasure({ id: match.params.id, subjectId: match.params.subjectId });
    }
  }

  handleChange(value) {
    this.setState({ value });
  }

  handleSelectChange(event) {
    this.setState({
      subjectId: event.target.value,
    });
  }

  handleDelete() {
    const { measure: { id, subject_id: subjectId }, deleteMeasure, history } = this.props;
    deleteMeasure({
      id,
      subjectId,
    }).then(() => {
      history.push(`/my-subject/${subjectId}`);
    });
  }

  handleDateChange(event) {
    this.setState({
      date: event.target.value,
    });
  }

  handleSubmit() {
    const { subjectId, value, date: dateState } = this.state;
    const {
      measure: { id, subject_id: subjectIdProps },
      history, saveMeasure, updateMeasure, subjects,
    } = this.props;

    if (id) {
      updateMeasure({
        id,
        subjectId: subjectIdProps,
        units: value,
        dateM: dateState,
      }).then(() => {
        history.push(`/my-subject/${subjectIdProps}`);
      });
    } else {
      const subj = subjectId || subjects[0].id;
      saveMeasure({
        id,
        units: value,
        subjectId: subj,
        dateM: dateState,
      }).then(() => {
        history.push(`/my-subject/${subj}`);
      });
    }
  }

  render() {
    const { measure: { id: measureId, subject_id: subjectIdProps, units }, subjects } = this.props;
    const { subjectId, date } = this.state;
    const measureDate = measureId ? '' : (
      <div className="row measure-date">
        <span style={{ paddingBottom: '5px' }}>Pick a date, default is today</span>
        <input type="date" onChange={this.handleDateChange} value={date} />
      </div>
    );
    return (
      <div className="bg-gray new-measure">
        {measureDate}
        <div className="row measure-date">
          {
                subjectId || subjectIdProps ? '' : (
                  <select onChange={this.handleSelectChange}>
                    {subjects.map(x => (
                      <option key={x.id} value={x.id}>{x.name}</option>
                    ))}
                  </select>
                )
              }
        </div>
        <div className="row circle">
          <CircleSlider
            value={units}
            size={300}
            onChange={this.handleChange}
            showTooltip
          />
        </div>
        <div className="row buttons last-div">
          {
                !measureId ? ''
                  : (<button type="button" className="button-red" onClick={this.handleDelete}>Delete</button>)
              }
          <button type="button" className="button-green" onClick={this.handleSubmit}>Save</button>
        </div>
      </div>
    );
  }
}

Measure.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  measure: PropTypes.shape({
    id: PropTypes.number,
    date_m: PropTypes.string,
    subject_id: PropTypes.number,
    units: PropTypes.number,
  }).isRequired,
  subjects: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
    params: PropTypes.object,
  }).isRequired,
  newMeasure: PropTypes.func.isRequired,
  fetchSubjects: PropTypes.func.isRequired,
  fetchMeasure: PropTypes.func.isRequired,
  saveMeasure: PropTypes.func.isRequired,
  deleteMeasure: PropTypes.func.isRequired,
  updateMeasure: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  measure: state.measure.item,
  subjects: state.subject.mySubjects,
});

const mapDispatchToProps = dispatch => ({
  newMeasure: () => dispatch(newMeasure()),
  fetchSubjects: () => dispatch(mySubjectsThunk()),
  fetchMeasure: id => dispatch(fetchMeasureThunk(id)),
  saveMeasure: measure => dispatch(measureThunk(measure)),
  deleteMeasure: measure => dispatch(deleteMeasureThunk(measure)),
  updateMeasure: measure => dispatch(updateMeasureThunk(measure)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Measure));
