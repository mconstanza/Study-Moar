import React, { Component } from 'react';
import * as actionCreators from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Youtube from './Youtube';

class YoutubeContainer extends Component {

  youtubeResults = () => {

    const videos = this.props.youtubeResults.map((video) =>
      {
        return <Youtube video={video} channel={video.snippet.channelTitle} id={video.id.videoId} thumbnail={video.snippet.thumbnails.high}/>
      })
      return videos
    }

  render() {
    return (
      <div id="YoutubeContainer">
        {this.youtubeResults()}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
    return {
      youtubeResults: state.youtubeResults
    }
}

export default connect(mapStateToProps)(YoutubeContainer);
