import React, { Component } from 'react';
import Search from './Search';
import CardContainer from './CardContainer';
import {Divider, Container} from 'semantic-ui-react'
import Footer from './Footer';
import Header from './Header';

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <Container fluid id="content">
          <Header/>
          <CardContainer/>
        </Container>
        <Footer/>
      </div>

    );
  }
}

export default Home;
