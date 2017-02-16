require('dotenv').config()

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from './store/store';
import './App.css';



const initialState =
{
  query: '',
  youtube: {isFetching: false, results: []},
  wolfram: {isFetching: false, results: []},
  user: false,
  isLoggedIn: false
}

const store = configureStore(initialState);

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
            {this.props.children}
        </div>
      </Provider>
    );
  }
}

export default App;
