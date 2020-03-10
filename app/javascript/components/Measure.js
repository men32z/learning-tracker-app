import React, {Component} from 'react';
import Time from '../helpers/Time';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CircleSlider } from "react-circle-slider";
import {measureThunk} from '../thunks/measurements';
import { mySubjectsThunk } from '../thunks/subjects';

class Measure extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0,
        subjectId: null,
        date: Time.today(),
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSelectChange = this.handleSelectChange.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
    }

    componentDidMount(){
      if(this.props.match.params.subject_id){
        this.subjectId = this.props.match.params.subject_id;
      } else {
        this.props.fetchSubjects();
      }
    }

    handleChange(value){
      this.setState({ value });
    }

    handleSelectChange(event){
      console.log(event.target.value);
      this.setState({
          subjectId: event.target.value,
      });
    }

    handleDateChange(event){
      this.setState({
          date: event.target.value,
      });
    }

    handleSubmit(){
      const {subjectId, value, date} = this.state;
      const {measure:{id}, saveMeasure, subjects} = this.props;

      if(id){

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
        const measureDate = id ? '' : (
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
                subjectId ? '' : (
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
                value={value}
                size={300}
                onChange={this.handleChange}
                showTooltip
              />
            </div>
            <div className="row buttons">
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
  fetchSubjects: () => dispatch(mySubjectsThunk()),
  saveMeasure: (measure) => dispatch(measureThunk(measure)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Measure));