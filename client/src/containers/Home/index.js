import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import SongResults from './../../components/SongResults'
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
            })
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Welcome To Songnotes</h1>
                    <p>Compose your thoughts on today's hits here.</p>
                </Jumbotron>
                <SongResults songs={this.state.songs}></SongResults>
            </div>
        );
    }
}

export default Home;
