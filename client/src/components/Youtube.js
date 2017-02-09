import React, { Component } from 'react';

class Youtube extends Component {

  url = 'https://www.youtube.com/watch?v=' + this.props.id

  render() {
    return (
      <div key={this.props.id}>
        <a target="blank" href= {this.url}>
          <img src={this.props.thumbnail.url}/>
          <div className='youtubeTextDiv'>
            <p className='youtubeChannelName'>
              {this.props.channel}
            </p>
          </div>
        </a>
      </div>
    );
  }
}

export default Youtube;
