import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Circle from 'react-circle';
/* eslint-disable-next-line */
import { library } from '../../assets/plugins/fas.js';
import { colors } from '../../data/styles';

export default function Home() {
  const circles = [10, 25, 80].map(x => (
    <div key={x}>
      <Circle
        responsive // Boolean: Make SVG adapt to parent size
        progress={x} // Number: Update to change the progress and percentage.
        progressColor="#8EE289" // String: Color of "progress" portion of circle.
        textStyle={{
          font: 'bold 7rem Helvetica, Arial, sans-serif',
        }}
        textColor={colors.grayDark} // String: Color of percentage text color.
        showPercentageSymbol={false}
      />
      <h3>subject</h3>
    </div>
  ));

  const subjects = [
    {
      id: 1, fa: ['fab', 'html5'], text: 'HTML 5', number: 45,
    },
    {
      id: 1, fa: ['fab', 'react'], text: 'React', number: 30,
    },
    {
      id: 1, fa: ['fab', 'bootstrap'], text: 'Bootstrap', number: 20,
    },
    {
      id: 1, fa: ['fas', 'atlas'], text: 'Spanish', number: 45,
    },
    {
      id: 1, fa: ['fas', 'book-medical'], text: 'Medicine', number: 48,
    },
    {
      id: 1, fa: ['fas', 'chess'], text: 'Chess', number: 37,
    },
  ].map(x => (
    <div className="home-subject bg-white" key={x.id}>
      <div>
        <FontAwesomeIcon icon={x.fa} />
      </div>
      <div>
        <div><span>{x.text}</span></div>
        <div className="home-subject-text">
          <span>{x.number}</span>
          <span>Minutes</span>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="bg-gray full-screen">
      <div className="bg-white row">
        <div className="home-date">
          <div><FontAwesomeIcon icon={['fas', 'angle-left']} /></div>
          <div><b>7 september 2013</b></div>
          <div><FontAwesomeIcon icon={['fas', 'angle-right']} /></div>
        </div>
        <div className="home-circles">
          {circles}
        </div>
      </div>
      <div className="row">
        <div className="home-subjects">
          {subjects}
        </div>
      </div>
    </div>
  );
}
