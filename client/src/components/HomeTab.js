import React, { Component } from 'react';
import * as actionCreators from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Loader, Image, Container} from 'semantic-ui-react';

import Login from './Login';
import HistoryFeed from './HistoryFeed';


class HomeTab extends Component {

  showLoginForm = () => {
    if (!this.props.user && !this.props.isLoggedIn) {
      return <Login/>
    }
  }

  showHistoryFeed = () => {
    if (this.props.user && this.props.isLoggedIn) {
      return <HistoryFeed history={this.props.history}/>
    }
  }

  render() {
    return (
      <div id="HomeTabContainer">
        {this.showLoginForm()}
        {this.showHistoryFeed()}
      </div>
    )
  }
}

export default HomeTab;
