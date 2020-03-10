import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* eslint-disable-next-line */
import { library } from '../assets/plugins/fas.js';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Time from '../helpers/Time';
import Statistics from './Statistics';
import MySubjects from './MySubjects';

export default function Home() {
  const { date } = useParams();
  const dateToday = date || Time.today();
  return (
    <div className="bg-gray full-screen">
      <div className="bg-white row">
        <div className="home-date">
          <Link to={`/home/${Time.yesterday(dateToday)}`}>
            <FontAwesomeIcon icon={['fas', 'angle-left']} />
          </Link>
          <div><b>{Time.format(dateToday)}</b></div>
          <Link to={`/home/${Time.tomorrow(dateToday)}`}>
            <FontAwesomeIcon icon={['fas', 'angle-right']} />
          </Link>
        </div>
        <Statistics />
      </div>
      <MySubjects date={dateToday} />
    </div>
  );
}
