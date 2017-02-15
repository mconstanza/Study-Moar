import React, { Component } from 'react';
import * as actionCreators from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Header, Feed, Segment} from 'semantic-ui-react';
import dateFormat from 'dateformat';

class HistoryFeed extends Component {

  feedEvents = () => {
    if(this.props.history) {
      // reverse the array so newest events are presented up top
      const events = this.props.history.slice(this.props.history.length -9 || 0, this.props.history.length).reverse().map((event) => {
        return (
          <Segment color='green' textAlign='left' compact key={event._id}>
            <Feed.Event key={event._id +'feed'}>
              <Feed.Content>
                <Feed.Summary>
                  You searched for <span className='historyQuery'>{event.query}</span>
                  <Feed.Date className='historyFeedDate'>{dateFormat(event.date, "mmmm dS, yyyy, h:MM")}</Feed.Date>
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Segment>
        )
      })
      return events
    }
  }

  render() {
    return (

      <Segment.Group id="HistoryFeed">
        <Segment color='green'>
          <Header>Search History</Header>
          {/* <Segment.Group> */}
            <Feed size='small'>
              {this.feedEvents()}
            </Feed>
          {/* </Segment.Group> */}
        </Segment>
      </Segment.Group>
    )
  }
}

export default HistoryFeed;
