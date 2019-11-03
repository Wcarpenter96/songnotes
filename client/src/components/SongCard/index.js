import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.song.image} />
            <Card.Body>
                <Card.Title>{props.song.title}</Card.Title>
                <Card.Text>{props.song.artist}
                </Card.Text>
                <Button href={`/songs/${props.song._id}`} variant="primary">Notes</Button>
            </Card.Body>
        </Card>
    )
}