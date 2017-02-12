import React, {Component} from 'react';
import * as actionCreators from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import YoutubeContainer from './YoutubeContainer';
import WolframContainer from './WolframContainer';

class CardContainer extends Component {

    render() {
        return (
            <div id="CardContainer">
                <YoutubeContainer/>
                <WolframContainer/>
            </div>
        );
    }
}

export default CardContainer
