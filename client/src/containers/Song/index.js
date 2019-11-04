import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, Jumbotron, Card, CardGroup } from 'react-bootstrap';
import TextArea from './../../components/TextArea';
import CommentResults from './../../components/CommentResults';
import API from './../../utils/API';

class Song extends Component {

    state = {
        song: {
            title: '',
            artist: '',
            image: '',
            comments: [],
        },
        comment: ''
    }

    getSong() {
        const { id } = this.props.match.params
        API.getSong(id)
            .then(res => {
                this.setState({
                    song: res.data
                })
            })
    }

    componentDidMount() {
        this.getSong()
    }

    handleInputChange = e => {
        const { value } = e.target;
        this.setState({ comment: value });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { id } = this.props.match.params
        const { comment } = this.state
        API.sendComment(comment, id)
            .then(() => {
                this.getSong();
            })
    }

    render() {
        const { title, artist, image, comments } = this.state.song
        return (
            <div style={{ position: "relative" }}>
                <Jumbotron>
                    <h1>{title}</h1>
                    <h5>by {artist}</h5>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <CardGroup>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={image} />
                                    <TextArea
                                        handleInputChange={this.handleInputChange}
                                        handleSubmit={this.handleSubmit}
                                    />
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Header><b>Notes</b></Card.Header>
                                    <ListGroup variant="flush">
                                        <CommentResults comments={comments}></CommentResults>
                                    </ListGroup>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Song;