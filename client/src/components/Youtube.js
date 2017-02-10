import React, { Component } from 'react';
import { Card, Icon, Image, Modal, Embed } from 'semantic-ui-react'

class Youtube extends Component {

  url = 'https://www.youtube.com/watch?v=' + this.props.id

  render() {
    return (
      <Modal closeIcon="close" trigger={
        <Card color = 'red' key={this.props.id} className="youtubeVideo">
            <img className="youtubeThumbnail" src={this.props.thumbnail.url}/>
          <Card.Content>
            <Card.Header>
              {this.props.channel}
            </Card.Header>
            <Card.Description>
              {this.props.title}
            </Card.Description>
          </Card.Content>
        </Card>
      }>
      <Modal.Content>
        <Embed
          id={this.props.id}
          placeholder={this.props.thumbnail.url}
          source='youtube'
        />
      </Modal.Content>
    </Modal>
    );
  }
}

export default Youtube;
