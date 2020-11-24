import React, { Component } from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/navigation';
import routes from './Router/Url';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

class App extends Component {

  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Navigation />
          <ReactNotification />
          {this.showContentMenus(routes)}
        </Router>
      </>
    );
  }
}

export default App;
