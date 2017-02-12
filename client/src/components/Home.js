import React, { Component } from 'react';
import Search from './Search';
import CardContainer from './CardContainer';
import {Divider} from 'semantic-ui-react'

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <Search/>
        <Divider/>
        <CardContainer/>
      </div>
    );
  }
}

export default Home;
