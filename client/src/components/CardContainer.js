import React, {Component} from 'react';
import * as actionCreators from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import YoutubeContainer from './YoutubeContainer';
import WolframContainer from './WolframContainer';
import QuizletContainer from './QuizletContainer';
import HomeTab from './HomeTab';
import { Menu, Icon } from 'semantic-ui-react'

class CardContainer extends Component {

    handleItemClick = (e, { name }) => {this.props.activeTab(name)}

    displayActive = () => {
      if (this.props.activeItem == 'Youtube'){
        return <YoutubeContainer/>
      }
      else if (this.props.activeItem == 'Wolfram Alpha'){
        return <WolframContainer/>
      }
      else if (this.props.activeItem == 'Quizlet'){
        return <QuizletContainer/>
      }
      else if (this.props.activeItem == 'Home'){
        return <HomeTab user={this.props.user} history={this.props.history} isLoggedIn={this.props.isLoggedIn}/>
      }
    }

    displayResults = (tab) => {
      switch (tab){
        case 'Youtube':
          return this.props.youtubeResults.length
        case 'Wolfram':
          return this.props.wolframResults.length
        case 'Quizlet':
          return this.props.quizletResults.length
      }
    }

    render() {
        return (
            <div id="CardContainer">
              <Menu tabular>
                <Menu.Item id="homeTab" color='green' name='Home' active={this.props.activeItem === 'Home'} onClick={this.handleItemClick}>
                  <Icon color='green' name='home'/>
                  Home
                </Menu.Item>
                <Menu.Item id="youtubeTab" color='red' name='Youtube' active={this.props.activeItem === 'Youtube'} onClick={this.handleItemClick}>
                  <Icon color='red' name='youtube' />
                  Youtube [{this.displayResults('Youtube')}]
                </Menu.Item>
                <Menu.Item id="wolframTab" color='orange' name='Wolfram Alpha' active={this.props.activeItem === 'Wolfram Alpha'} onClick={this.handleItemClick}>
                  Wolfram Alpha [{this.displayResults('Wolfram')}]
                </Menu.Item>
                <Menu.Item id="quizletTab" color='blue' name='Quizlet' active={this.props.activeItem === 'Quizlet'} onClick={this.handleItemClick}>
                  Quizlet [{this.displayResults('Quizlet')}]
                </Menu.Item>
              </Menu>
              {this.displayActive()}
            </div>
        );
    }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    activeTab: actionCreators.activeTab
  }, dispatch)
}

const mapStateToProps = function(state) {
    return {
      activeItem: state.activeTab,
      youtubeResults: state.youtube.results,
      wolframResults: state.wolfram.results,
      quizletResults: state.quizlet.results,
      user: state.user,
      isLoggedIn: state.isLoggedIn,
      history: state.history
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
