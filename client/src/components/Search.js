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

    clickHandler = (query) => {
      this.props.youtubeSearch(query);
    }

    render() {

        return (
            <div id="searchDiv">
                <Input focus id="searchBar" onChange={this.changeHandler} id="sInput" placeholder="Teach me..." value={this.props.query}/>
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
    searchQuery: actionCreators.searchQuery
  }, dispatch)
}

const mapStateToProps = function(state) {
    return {
      query: state.query,
      youtubeResults: state.youtubeResults
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);