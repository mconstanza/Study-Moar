import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'

class QuizletTerm extends Component {

  render() {
    return (
    <Segment>
      <Segment vertical>
        {this.props.term}
      </Segment>
      <Segment vertical>
        {this.props.definition}
      </Segment>
    </Segment>

    )
  }
}

export default QuizletTerm;
