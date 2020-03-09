import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Circle from 'react-circle';
/* eslint-disable-next-line */
import { library } from '../assets/plugins/fas.js';
import { colors } from '../data/styles';

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
          {subjects.map(x => (
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
          ));}
        </div>
      </div>
    </div>
  );
}
