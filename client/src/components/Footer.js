import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react'

class Footer extends Component {
  render() {
    return (

        <Menu inverted id="Footer">
          <Menu.Item id="footerComment">
            <p>Study Moar! Demo designed by<a id="portfolioLink" href="https://mconstanza.github.io/portfolio/"> Mike Constanza</a></p>
          </Menu.Item>

          <Menu.Item>
            <Button.Group >
              <a target="blank" href="http://www.linkedin.com/in/michael-constanza/">
                <Button circular color='linkedin' icon='linkedin' />
              </a>
              <a target="blank" href="https://github.com/mconstanza/Study-Moar">
                <Button circular color='white' icon='github' />
              </a>
              <a href="mailto:michael.constanza@gmail.com?Subject=I%20Saw%20You%20@%20Demo%20Day">
                <Button circular color='black' icon='mail' />
              </a>
            </Button.Group>
          </Menu.Item>

        </Menu>
    );
  }
}

export default Footer;
