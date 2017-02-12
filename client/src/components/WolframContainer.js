import React, { Component } from 'react';
import * as actionCreators from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { Segment, Dimmer, Loader, Item } from 'semantic-ui-react'


import Wolfram from './Wolfram';

class WolframContainer extends Component {

  loading = () => {
    if (this.props.isFetching){
      return (
        <Segment>
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        </Segment>
      )
    }
  }

  wolframResults = () => {

    const items = this.props.results.map((card) =>
      {
        return <Wolfram key={card.id} img={card.subpods[0].img.src} title={card.subpods[0].img.title}/>
      })
      return items
    }

    content = () => {
      if (this.props.results) {
        if (this.props.results.length > 0){
          return (
            <Item.Group divided key={this.props.id} color = 'orange'>
              {this.wolframResults()}
            </Item.Group>
          )
        }
      }
    }

    title = () => {
      if (this.props.results) {
        if (this.props.results.length > 0){
          return <h2 id="wolframHeading">Wolfram Alpha</h2>
        }
      }
    }

  render() {
    return (
      <div>
        {this.title()}
        <div id="WolframContainer">
          {this.loading()}
          {this.content()}
        </div>
    </div>
    );
  }
}

const mapStateToProps = function(state) {
    return {
      isFetching: state.wolfram.isFetching,
      results: state.wolfram.results
    }
}

export default connect(mapStateToProps)(WolframContainer);
