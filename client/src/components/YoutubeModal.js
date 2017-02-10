import React, { Component } from 'react';
import { Button, Header, Image, Modal, Embed } from 'semantic-ui-react';

class YoutubeModal extends Component {

  render() {
    return (
      <Modal>
        <Modal.Content>
          <Embed
            id={this.props.videoId}
            placeholder={this.props.thumbnail}
            source='youtube'
          />
        </Modal.Content>
      </Modal>

    );
  }
}

export default YoutubeModal;
