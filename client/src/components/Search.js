import React, {Component} from 'react';
import * as actionCreators from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { Input, Button, Icon } from 'semantic-ui-react'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      }

    changeHandler = (event) => {
      var query = event.target.value;
      this.props.searchQuery(query);
    }

    handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.youtubeSearch(this.props.query);
      this.props.wolframSearch(this.props.query);
      this.props.quizletSearch(this.props.query);
      this.props.postSearchToHistory(this.props.user);
    }
  }

    clickHandler = () => {
      this.props.youtubeSearch(this.props.query);
      this.props.wolframSearch(this.props.query);
      this.props.quizletSearch(this.props.query);
      this.props.postSearchToHistory(this.props.query, this.props.user);
    }

    render() {

        return (
            <div id="searchDiv">
                <Input focus id="searchBar" onKeyPress={this.handleKeyPress} onChange={this.changeHandler} id="sInput" placeholder="Teach me..." value={this.props.query}/>
                <Button animated id="searchButton" onClick={()=>this.clickHandler}>
                  <Button.Content visible>Search</Button.Content>
                  <Button.Content hidden>
                    <Icon name='search'/>
                  </Button.Content>
                </Button>
            </div>

        )
    }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    youtubeSearch: actionCreators.youtubeSearch,
    wolframSearch: actionCreators.wolframSearch,
    quizletSearch: actionCreators.quizletSearch,
    search: actionCreators.search,
    searchQuery: actionCreators.searchQuery,
    postSearchToHistory: actionCreators.postSearchToHistory
  }, dispatch)
}

const mapStateToProps = function(state) {
    return {
      query: state.query,
      user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
