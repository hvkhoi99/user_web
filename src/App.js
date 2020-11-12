import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import routes from './Router/Url';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStory: []
    }
  }
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
          {this.showContentMenus(routes)}
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
