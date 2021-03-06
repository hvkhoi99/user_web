import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import appReducers from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Loading from './components/Loading';
import { HomeWrapper } from "./components/Main/style";

const store = createStore(
  appReducers,
  applyMiddleware(thunk)
);


ReactDOM.render(
  <Provider store={store}>
    <Loading>
      <HomeWrapper>
        <App />
      </HomeWrapper>
    </Loading>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
