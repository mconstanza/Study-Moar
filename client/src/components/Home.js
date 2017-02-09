import React, { Component } from 'react';
import Search from './Search';
import CardContainer from './CardContainer';

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <Search/>
        <CardContainer/>
      </div>
    );
  }
}

export default Home;
