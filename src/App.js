import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/NaviBar.js'
import Footer from './Components/Footer.js'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { Home } from './Home';
import { Courses } from './Courses';
import { Contacts } from './Contacts';

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
