import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, Col, CardHeader, CardFooter, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteJoke } from '../actions';
import { withRouter } from 'react-router';

const JokeCard = props => {
  
  const {id, joke, punchline, author_username} = props.joke;
  const [visible, setVisible] = useState('d-none');
  const [punch, setPunch] = useState('View Punchline')

  const togglePunchline = () => {
    setVisible((visible === 'd-none') ? '' : 'd-none' );
    setPunch((punch === 'View Punchline') ? 'Hide Punchline' : 'View Punchline');
  }

  if (props.edit) {
    return (
      <Col sm={4}>
      <Card>
        <CardHeader className="pl-auto">
          <Link to={`/edit-joke/${id}`} size="sm">Edit</Link>
          <Button onClick={() => props.deleteJoke(id, props.history, props.username)} size="sm">Delete</Button>
        </CardHeader>
        <CardBody>
          <CardTitle>{joke}</CardTitle>
          <CardText className={visible}><i>{punchline}</i></CardText>
          <Button onClick={togglePunchline} className={((punchline === null || punchline === '') ? 'd-none' : 'punchline-button')} size="sm">{punch}</Button>
        </CardBody>
        <CardFooter>Submitted by: <strong><Link to={`/jokes/${author_username}`}>{author_username}</Link></strong></CardFooter>
      </Card>
      </Col>
    )
  }

  return (
    <Col sm={4}>
      <Card body className="text-center joke-card">
        <CardTitle>{joke}</CardTitle>
        <CardText className={visible}><i>{punchline}</i></CardText>
        <Button onClick={togglePunchline} className={((punchline === null || punchline === '') ? 'd-none' : 'punchline-button')} size="sm">{punch}</Button>
        <CardText>Submitted by: <strong><Link to={`/jokes/${author_username}`}>{author_username}</Link></strong></CardText>
      </Card>
    </Col>
  )
}

export default withRouter(connect('', { deleteJoke })(JokeCard));
