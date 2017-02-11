import React, { Component } from 'react';
import * as actionCreators from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Youtube from './Youtube';


class YoutubeContainer extends Component {

  youtubeResults = () => {

    const videos = this.props.youtubeResults.map((video) =>
      {
        return <Youtube video={video} channel={video.snippet.channelTitle} title={video.snippet.title} key={video.id.videoId} id={video.id.videoId} thumbnail={video.snippet.thumbnails.high}/>
      })
      return videos
    }

    title = () => {
      if (this.props.youtubeResults.length > 0) {
        return <h2 id="youtubeHeading">Youtube</h2>
      }
    }

  render() {
    return (
      <div>
      {this.title()}
      <div id="YoutubeContainer">

        {this.youtubeResults()}
      </div>
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
