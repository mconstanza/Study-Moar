import React, { Component } from 'react';
import * as actionCreators from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Header, Container, Button, Form, Input, Segment } from 'semantic-ui-react'


class Login extends Component {

  constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: ''
      };
  }

  handleClick = () => {
    this.props.logIn(this.state.email, this.state.password)
  }

  emailChange = (e) => {
    this.setState({email: e.target.value})
  }

  passwordChange = (e) => {
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <Segment.Group className='loginFormDiv'>

          <Segment>
            <Header>Login</Header>
          </Segment>
          <Segment color='blue' >
            <Input onChange={this.emailChange} name="email" placeholder="Email"/>
            <br />
            <br />
            <Input onChange={this.passwordChange} type="password"/>
            <br />
            <br />
            <Button primary onClick={this.handleClick}>Submit</Button>
        </Segment>
      </Segment.Group>

    )
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
      logIn: actionCreators.logIn
  }, dispatch)
}

const mapStateToProps = function(state) {
    return {
      query: state.query,
      user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
