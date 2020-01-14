import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, Col, CardHeader, CardFooter, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteJoke } from '../actions';
import { withRouter } from 'react-router';

const JokeCard = props => {

  const {id, joke, punchline, author_username} = props.joke;
  const [visible, setVisible] = useState('invisible');
  const [punch, setPunch] = useState('View Punchline')

  const togglePunchline = () => {
    setVisible((visible === 'invisible') ? '' : 'invisible' );
    setPunch((punch === 'View Punchline') ? 'Hide Punchline' : 'View Punchline');
  }

  if (props.edit) {
    return (
      <Col sm={12} className="align-self-center">
      <Card className="text-center joke-card editable-joke-card">
        <CardHeader>
          <CardText>
            <Link to={`/edit-joke/${id}`} title="Edit Joke">
              <i className="icon ion-md-create"></i>
            </Link>
            <Link to="" title="Delete Joke">
              <i className="icon ion-md-trash" onClick={() => props.deleteJoke(id, props.history, props.username)}></i>
            </Link>
          </CardText>
        </CardHeader>
        <CardBody>
          <CardText className="joke">{joke}</CardText>
          <CardText className={visible}><i>{punchline}</i></CardText>
          <Button onClick={togglePunchline} className={((punchline === null || punchline === '') ? 'd-none' : 'punchline-button')} size="sm" color="info">{punch}</Button>
        </CardBody>
      </Card>
      </Col>
    )
  }

  return (
    <Col sm={12} className="align-self-center">
      <Card body className="text-center public-joke-card">
        <CardTitle className="posted-by">Posted by <Link to={`/jokes/${author_username}`}>{author_username}</Link></CardTitle>
        <CardText className="joke">{joke}</CardText>
        <CardText className={visible}><i>{punchline}</i></CardText>
        <Button onClick={togglePunchline} className={((punchline === null || punchline === '') ? 'd-none' : 'punchline-button')} size="sm" color="info">{punch}</Button>
      </Card>
    </Col>
  )
}

export default withRouter(connect('', { deleteJoke })(JokeCard));
