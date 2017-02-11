import React, { Component } from 'react';
import * as actionCreators from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Wolfram from './Wolfram';

class WolframContainer extends Component {

  wolframResults = () => {

    const cards = this.props.wolframResults.map((card) =>
      {
        return <Wolfram key={card.id} img={card.subpods[0].img.src} title={card.subpods[0].img.title}/>
      })
      return cards
    }

    title = () => {
      if (this.props.wolframResults && this.props.wolframResults.length > 0) {
        return <h2 id="wolframHeading">Wolfram Alpha</h2>
      }
    }

  render() {
    return (
      <div>
        {this.title()}
        <div id="WolframContainer">
          {this.wolframResults()}
        </div>
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
