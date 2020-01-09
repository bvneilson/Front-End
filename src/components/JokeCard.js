import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const JokeCard = props => {

  const {id, joke, punchline, author_username} = props.joke;
  const [visible, setVisible] = useState('d-none');
  const [punch, setPunch] = useState('View Punchline')

  const togglePunchline = () => {
    setVisible((visible === 'd-none') ? '' : 'd-none' );
    setPunch((punch === 'View Punchline') ? 'Hide Punchline' : 'View Punchline');
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

export default JokeCard;
