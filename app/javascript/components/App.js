import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import Routes from './router/routes';

export default function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes />
        <Menu />
      </div>
    </Router>
  );
}
