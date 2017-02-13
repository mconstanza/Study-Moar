import React, {Component} from 'react';
import * as actionCreators from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import YoutubeContainer from './YoutubeContainer';
import WolframContainer from './WolframContainer';

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
    }

    render() {
        return (
            <div id="CardContainer">
              <Menu tabular>
                <Menu.Item id="youtubeTab" color='youtube' name='Youtube' active={this.props.activeItem === 'Youtube'} onClick={this.handleItemClick}>
                  <Icon color='youtube' name='youtube' />
                  Youtube
                </Menu.Item>
                <Menu.Item color='orange' name='Wolfram Alpha' active={this.props.activeItem === 'Wolfram Alpha'} onClick={this.handleItemClick} />
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
      activeItem: state.activeTab
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
