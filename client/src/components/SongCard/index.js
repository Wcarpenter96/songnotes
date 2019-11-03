import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <Link to={`/songs/${props.song._id}`} onClick={props.handleSongSubmit}>
            <Card style={{ width: '15rem' }} className='mb-3'>
                <Card.Img variant="top" src={props.song.image} />
                <Card.Header>{props.song.title}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>{props.song.artist}</ListGroup.Item>
                </ListGroup>
            </Card>
        </Link>
    )
}