import React, {Component} from 'react';
import {Card, Icon, Image, Modal, Embed, Segment} from 'semantic-ui-react'
import QuizletTerm from './QuizletTerm';

class Quizlet extends Component {

    renderTerms = () => {
        if (this.props.terms.length < 3) {
            var terms = this.props.terms.map((term) => {
                return (

                  <QuizletTerm definition={term.definition} key={term.id} term={term.term}/>

                )

            })
        } else {
            var slicedArray = this.props.terms.slice(0, 3)
            var terms = slicedArray.map((term) => {
                return (

                    <QuizletTerm definition={term.definition} key={term.id} term={term.term}/>

                )
            })
        }
        return terms
    }

    render() {
        var creatorURL = 'https://quizlet.com/' + this.props.creator;
        var setURL = 'https://quizlet.com' + this.props.url
        return (
            <Card target="blank" href={setURL} color='blue' className="quizletCard">

                <Card.Content>
                    <Card.Header>
                      {this.props.title}
                      <Card.Meta>
                        {this.props.terms.length} terms
                      </Card.Meta>

                    </Card.Header>
                    <a target="blank" href={creatorURL}>{this.props.creator}</a>
                    <Card.Description>
                        {this.props.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content>

                  <Segment.Group horizontal>
                    {this.renderTerms()}
                  </Segment.Group>

                </Card.Content>

            </Card>
        )
    }
}

export default Quizlet;
