import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/MainContent';
import Footer from './components/Footer/Footer';
import './App.css'
import {BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStory: []
    }
  }


  render() {
    return (
      <>
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
