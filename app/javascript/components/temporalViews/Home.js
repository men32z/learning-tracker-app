import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {library} from '../../assets/plugins/fas.js'
import Circle from 'react-circle';

export default function Home(){
  return (
    <div className="bg-gray full-screen">
      <div className="bg-white">
        <div className="home-date">
          <div><FontAwesomeIcon icon={['fas', 'angle-left']} /></div>
          <div>7 september 2013</div>
          <div><FontAwesomeIcon icon={['fas', 'angle-right']} /></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}