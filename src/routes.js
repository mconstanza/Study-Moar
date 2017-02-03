// src/routes.js
import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './App';
import Home from './components/Home';
import User from './components/User';


const Routes = (props) => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/user/:username" component={User}/>
        </Route>
    </Router>
);

export default Routes;
