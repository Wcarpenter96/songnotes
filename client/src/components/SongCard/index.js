import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

export default (props) => {
    return (
        <Container>
            <Row className="mb-3">
                <Col className={"text-center"}>
                    <h1 className={"text-center"}>{props.article.title}</h1>
                    <Card.Img style={{ width: '35rem' }} src={props.song.image} />

                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <ListGroup>
                        <ListGroup.Item>{props.song.title}</ListGroup.Item>
                        <ListGroup.Item>{props.song.artist}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}