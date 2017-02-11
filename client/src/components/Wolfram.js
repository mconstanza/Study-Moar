import React, { Component } from 'react';
import { Card, Icon, Image, Modal, Embed, Item } from 'semantic-ui-react'

class Wolfram extends Component {

  render() {
    return (

        <Item key={this.props.id} color = 'orange'>
          <Item.Image src={this.props.img}/>
          {/* <Item.Content>
            <Item.Description>
              {this.props.title}
            </Item.Description>
          </Item.Content> */}
        </Item>
    );
  }
}

export default Wolfram;
