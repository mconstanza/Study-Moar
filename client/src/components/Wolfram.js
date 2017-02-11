import React, { Component } from 'react';
import { Card, Icon, Image, Modal, Embed } from 'semantic-ui-react'

class Wolfram extends Component {

  render() {
    return (

        <Card key={this.props.id} color = 'orange'>
          <img src={this.props.img}/>
          <Card.Content>
            <Card.Header>
            </Card.Header>
            <Card.Description>
              {this.props.title}
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

export default Wolfram;
