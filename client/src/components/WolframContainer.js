import React, { Component } from 'react';
import * as actionCreators from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { Segment, Dimmer, Loader, Item, Header } from 'semantic-ui-react'


import Wolfram from './Wolfram';

class WolframContainer extends Component {

  loading = () => {
    if (this.props.isFetching){
      return (
          <Loader active inline='centered'>Loading</Loader>
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

      if (this.props.results.length > 0){
        return <h2 id="wolframHeading">Wolfram Alpha</h2>
        }
      // else {
      //   return <Header size='huge'>Use the search above to start studying!</Header>
      // }
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
