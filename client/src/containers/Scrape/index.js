import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import API from './../../utils/API';

class Scrape extends Component {

    componentDidMount() {
        API.scrape();
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Scrape Complete.</h1>
                    <p>Go home to see the top hits.</p>
                </Jumbotron>
            </div>
        );
    }
}

export default Scrape;
