import React, { Component } from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/navigation';
import routes from './Router/Url';


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
          {this.showContentMenus(routes)}
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
