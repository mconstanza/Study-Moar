import React, {Component} from 'react';
import * as actionCreators from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      }

    changeHandler = (event) => {
      var query = event.target.value;
      this.props.searchQuery(query);
      console.log(this.props)
    }

    clickHandler = (query) => {
      this.props.searchKAExercises(query);
    }

    render() {

        return (
            <div id="searchDiv">
                <input id="searchBar" onChange={this.changeHandler} id="sInput" placeholder="Teach me..." value={this.props.query}/>
                <button id="searchButton" onClick={this.clickHandler}>Search</button>
            </div>

        )
    }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    searchKAExercises: actionCreators.fetchKAExercises,
    searchQuery: actionCreators.searchQuery
  }, dispatch)
}

const mapStateToProps = function(state) {
    return {query: state.query}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
