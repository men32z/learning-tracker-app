import React, {Component} from 'react';
import Time from '../helpers/Time';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CircleSlider } from "react-circle-slider";
import {newMeasure} from '../actions';
import {measureThunk,  fetchMeasureThunk,
  deleteMeasureThunk, updateMeasureThunk } from '../thunks/measurements';
import { mySubjectsThunk} from '../thunks/subjects';

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

    componentDidMount(){
      const {match, fetchMeasure, fetchSubjects, newMeasure} = this.props;
      if(this.props.match.path=== '/measurements/new'){
        newMeasure();
        if(match.params.subjectId){
          this.setState({subjectId:match.params.subjectId});
        } else {
          fetchSubjects();
        }
      } else {
        fetchMeasure({id: match.params.id, subjectId: match.params.subjectId});
      }
    }

    handleChange(value){
      this.setState({ value });
    }

    handleSelectChange(event){
      this.setState({
          subjectId: event.target.value,
      });
    }

    handleDelete(){
      const {measure:{id, subject_id}, deleteMeasure} = this.props;
      deleteMeasure({
        id,
        subject_id,
      }).then(()=> {
        this.props.history.push(`/my-subject/${subject_id}`);
      });
    }

    handleDateChange(event){
      this.setState({
          date: event.target.value,
      });
    }

    handleSubmit(){
      const {subjectId, value, date} = this.state;
      const {measure:{id, subject_id}, saveMeasure, updateMeasure, subjects} = this.props;

      if(id){
        updateMeasure({
          id,
          subject_id,
          units: value,
          date_m: date,
        }).then(()=> {
          this.props.history.push(`/my-subject/${subject_id}`);
        });
      } else {
        let subj = subjectId || subjects[0].id;
        saveMeasure({
          id,
          units: value,
          subjectId: subj,
          date_m: date,
        }).then(()=> {
          this.props.history.push(`/my-subject/${subj}`);
        });
      }
    }

    render() {
        const {measure: {id}} = this.props;
        const { value, subjectId } = this.state;
        const measureDate = this.props.measure.id ? '' : (
          <div className="row measure-date">
            <span style={{paddingBottom: '5px'}}>Pick a date, default is today</span>
            <input type="date" onChange={this.handleDateChange} value={this.state.date}/>
          </div>
        );
        return (
          <div className="bg-gray new-measure">
            {measureDate}
            <div className="row measure-date">
              {
                subjectId || this.props.measure.subject_id ? '' : (
                  <select onChange={this.handleSelectChange}>
                    {this.props.subjects.map(x=>(
                      <option key={x.id} value={x.id}>{x.name}</option>
                    ))}
                  </select>
                )
              }
            </div>
            <div className="row circle">
              <CircleSlider
                value={this.props.measure.units}
                size={300}
                onChange={this.handleChange}
                showTooltip
              />
            </div>
            <div className="row buttons last-div">
              {
                !id ? ''
                : (<button className="button-red" onClick={this.handleDelete}>Delete</button>)
              }
              <button className="button-green" onClick={this.handleSubmit}>Save</button>
            </div>
          </div>
        );
    }
}

Measure.propTypes = {
  measure: PropTypes.shape({
    id: PropTypes.number,
    date_m: PropTypes.string,
    units: PropTypes.number,
  }),
};

const mapStateToProps = state => ({
  measure: state.measure.item,
  subjects: state.subject.mySubjects,
});

const mapDispatchToProps = dispatch => ({
  newMeasure: () => dispatch(newMeasure()),
  fetchSubjects: () => dispatch(mySubjectsThunk()),
  fetchMeasure: (id) => dispatch(fetchMeasureThunk(id)),
  saveMeasure: (measure) => dispatch(measureThunk(measure)),
  deleteMeasure: (measure) => dispatch(deleteMeasureThunk(measure)),
  updateMeasure: (measure) => dispatch(updateMeasureThunk(measure)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Measure));