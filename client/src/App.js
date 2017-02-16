require('dotenv').config()

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from './store/store';
import './App.css';

var testUser = {
  "_id": {
       "$oid": "589f9ac03403a730109ac615"
   },
   "local": {
       "password": "$2a$08$0Qgl3ktQY1XUHzgbKpnewe4IKI8QeeZZQH3mzOJIFf4Vn6KEukrMy",
       "email": "michael.constanza@gmail.com"
     },
     history: [{query: "spongebob", date: Date.now()}]
}

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
