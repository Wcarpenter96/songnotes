import React from 'react';
import SongCard from './../SongCard'
import { CardColumns, Container, Row, Col } from 'react-bootstrap';

export default (props) => {
    if (props.songs.length > 0) {
        let { songs } = props;
        return (
            <Container>
                <Row>
                    <Col>
                    <CardColumns>
                            {songs.map((song, index) => {
                                return (<SongCard key={index} song={song}></SongCard>)
                            })}
                        </CardColumns>
                    </Col>
                </Row>
            </Container>
        )
    } else return (<div><h1>Press Scrape to Render Top Songs!</h1></div>)
}