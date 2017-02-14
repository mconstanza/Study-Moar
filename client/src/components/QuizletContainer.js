import React, { Component } from 'react';
import * as actionCreators from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Loader, Image} from 'semantic-ui-react';

import Quizlet from './Quizlet';


class QuizletContainer extends Component {

  quizletResults = () => {

    if (this.props.results.length >0){

    var truncatedResults = this.props.results.slice(0, 11);

    const quizlets = truncatedResults.map((quizlet) =>
      {
        return <Quizlet terms={quizlet.terms} key={quizlet.id} id={quizlet.id} title={quizlet.title} description={quizlet.description} url={quizlet.url} creatorId={quizlet.creator_id} creator={quizlet.created_by} termCount={quizlet.term_count}/>
      })
      return quizlets
    }
  }

    title = () => {
      if (this.props.results.length > 0) {
        return <h2 id="quizletHeading">Quizlet</h2>
      }
      // else {
      //   return <Header size='huge'>Use the search above to start studying!</Header>
      // }
    }

    loading = () => {
      if (this.props.isFetching){
        return (
            <Loader active inline='centered'>Loading</Loader>
        )
      }
    }

  render() {
    return (
      <div>
      {this.title()}
      <div id="QuizletContainer">
        {this.loading()}
        {this.quizletResults()}
      </div>
    </div>
    )
  }
}

const mapStateToProps = function(state) {
    return {
      results: state.quizlet.results,
      isFetching: state.quizlet.isFetching
    }
}

export default connect(mapStateToProps)(QuizletContainer);
