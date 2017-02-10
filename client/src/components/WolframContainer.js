import React, { Component } from 'react';
import * as actionCreators from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Wolfram from './Wolfram';

class WolframContainer extends Component {

  wolframResults = () => {

    const cards = this.props.wolframResults.map((card) =>
      {
        return <Wolfram/>
      })
      return cards
    }

  render() {
    return (
      <div id="WolframContainer">
        {/* {this.wolframResults()} */}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
    return {
      wolframResults: state.wolframResults
    }
}

export default connect(mapStateToProps)(WolframContainer);
