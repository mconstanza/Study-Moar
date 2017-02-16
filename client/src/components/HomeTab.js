import React, { Component } from 'react';
import * as actionCreators from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Loader, Image} from 'semantic-ui-react';

import Login from './Login';


class HomeTab extends Component {

  render() {
    return (
      <div>
      <div id="HomeTabContainer">
          {!this.props.user &&
            <Login/>
          }
      </div>
    </div>
    )
  }
}

export default HomeTab;
