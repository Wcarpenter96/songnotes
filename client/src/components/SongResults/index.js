import React from 'react';
import SongCard from './../SongCard'
import { CardGroup, Container, Row, Col } from 'react-bootstrap';

export default (props) => {
    if (props.songs.length > 0) {
        let { songs } = props;
        return (
            <Container>
                <Row>
                    <Col>
                        <CardGroup>
                            {songs.map((song, index) => {
                                return (<SongCard key={index} song={song}></SongCard>)
                            })}
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        )
    } else return (<div><h1>Press Scrape to Render Top Songs!</h1></div>)
}