import React, { Component } from 'react';
import {Header, Segment, Item, Icon} from 'semantic-ui-react';


class DemoDayIntro extends Component {

  render() {
    return (
        <Segment.Group id="DemoDayIntro">
          <Segment compact>
            <Header>Welcome to Study Moar!</Header>
          </Segment>
            <Segment color='red' compact>
              <p>I assembled this demo specifically for tonight with the intent of showing the power of Node.js, React, and the robust developer environment that has sprung around them.</p>
              <p>Since I work in education, I thought it would be great to rapidly prototype an app I haven't seen before: a study aggregator that compiles resources and will, eventually, help students manage their study time.
                The current version of the application pulls relevant educational resources from Youtube, Wolfram Alpha, and Quizlet.
              </p>
              <p>Try it out!</p>
            </Segment>
            <Segment color='red'>
              <Header>Future Goals</Header>
            </Segment>
            <Segment color='red'>
              <Item.Group>

                <Item>
                  <Icon name='write square'/>
                  <Item.Content>
                    Adding <b>LOTS</b> more APIs to pull from!
                  </Item.Content>
                </Item>

                <Item>
                  <Icon name='write square'/>
                  <Item.Content>
                    Utilizing OAuth tools already on backend to integrate into relevant services (Google, Quizlet, etc.).
                  </Item.Content>
                </Item>

                <Item>
                  <Icon name='write square'/>
                  <Item.Content>
                    Allow students to set due dates for upcoming assignments
                    or assessments and Study Moar! will search for relevant study materials and package them as
                    lessons to be reviewed prior to the test date.
                  </Item.Content>
                </Item>

                <Item>
                  <Icon name='write square'/>
                  <Item.Content>
                    Teacher Accounts
                  </Item.Content>
                </Item>

              </Item.Group>

            </Segment>
        </Segment.Group>
    )
  }
}

export default DemoDayIntro;
