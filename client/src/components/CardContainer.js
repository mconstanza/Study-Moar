import React, { Component } from 'react';
import YoutubeContainer from './YoutubeContainer';
import WolframContainer from './WolframContainer';

class CardContainer extends Component {
  render() {
    return (
      <div id="CardContainer">
        <YoutubeContainer/>
        <WolframContainer/>
      </div>
    );
  }
}

export default CardContainer;
