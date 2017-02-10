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
    }
  }

    clickHandler = (query) => {
      this.props.youtubeSearch(query);
      this.props.wolframSearch(this.props.query);
    }

    render() {

        return (
            <div id="searchDiv">
                <Input focus id="searchBar" onKeyPress={this.handleKeyPress} onChange={this.changeHandler} id="sInput" placeholder={process.env.REACT_APP_YOUTUBE_API || "Teach me..."} value={this.props.query}/>
                <Button animated id="searchButton" onClick={()=>this.clickHandler(this.props.query)}>
                  <Button.Content visible>Search</Button.Content>
                  <Button.Content hidden>
                    <Icon name='right arrow'/>
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
    searchQuery: actionCreators.searchQuery
  }, dispatch)
}

const mapStateToProps = function(state) {
    return {
      query: state.query,
      youtubeResults: state.youtubeResults,
      wolframResults: state.wolframResults
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
