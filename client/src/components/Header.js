import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import Search from './Search';

class Header extends Component {
  render() {
    return (

        <Menu inverted id="Header">
          <img src='./images/nerd.png' className="App-logo" alt="logo" />
          <h2>Study MOAR!</h2>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Search/>
            </Menu.Item>
          </Menu.Menu>

        </Menu>
    );
  }
}

export default Header;
