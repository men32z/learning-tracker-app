import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';
import Menu from './Menu';
import Home from './temporalViews/Home';

export default function App() {
  return (
    <Router>
      <div className="container">
      <Header />
      <Home />
      </div>
    </Router>
  );
}