import React, { Component } from 'react';
import Game from './Game'

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <button className="playButton">New Game</button>
                    <Game />
                </div>
            </div>
        );
    }
}

export default Home;
