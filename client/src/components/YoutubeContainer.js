import React, { Component } from 'react';
import * as actionCreators from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Divider, Segment, Loader, Image, Dimmer} from 'semantic-ui-react';


import Youtube from './Youtube';


class YoutubeContainer extends Component {

  youtubeResults = () => {

    const videos = this.props.results.map((video) =>
      {
        return <Youtube video={video} channel={video.snippet.channelTitle} title={video.snippet.title} key={video.id.videoId} id={video.id.videoId} thumbnail={video.snippet.thumbnails.high}/>
      })
      return videos
    }

    title = () => {
      if (this.props.results.length > 0) {
        return <h2 id="youtubeHeading">Youtube</h2>
      }
    }

    loading = () => {
      if (this.props.isFetching){
        return (
          <Segment>
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          </Segment>
        )
      }
    }

  render() {
    return (
      <div>
      {this.title()}
      <div id="YoutubeContainer">
        {this.loading()}
        {this.youtubeResults()}
      </div>
      <Divider/>
    </div>
    );
  }
}

const mapStateToProps = function(state) {
    return {
      results: state.youtube.results,
      isFetching: state.youtube.isFetching
    }
}

export default connect(mapStateToProps)(YoutubeContainer);
