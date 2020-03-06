import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {library} from '../../assets/plugins/fas.js'
import Circle from 'react-circle';
import {colors} from '../../data/styles.js';

export default function Home(){
  const circles =  [10, 25, 80].map(x=>(
    <div>
      <Circle
        responsive={true} // Boolean: Make SVG adapt to parent size
        progress={x} // Number: Update to change the progress and percentage.
        progressColor="#8EE289"  // String: Color of "progress" portion of circle.
        textStyle={{
          font: 'bold 7rem Helvetica, Arial, sans-serif'
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
    </div>
  );
}