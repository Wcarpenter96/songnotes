import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import API from './../../utils/API';

class Home extends Component {

    state = {
        songs: []
    }

    componentDidMount() {
        API.getSongs()
            .then(res => {
                this.setState({
                    songs: res.data
                })
                console.log(this.state.songs)
            })
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Home Page</h1>
                </Jumbotron>
            </div>
        );
    }
}

export default Home;
