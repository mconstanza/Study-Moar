require('dotenv').config()

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from './store/store';
import './App.css';


const initialState =
{
  query: '',
  youtubeResults: []
}

const store = configureStore(initialState);

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <div className="App-header">
            <img src='./images/nerd.png' className="App-logo" alt="logo" />
            <h2>Study MOAR!</h2>
          </div>
            {this.props.children}
        </div>
      </Provider>
    );
  }
}

export default App;
