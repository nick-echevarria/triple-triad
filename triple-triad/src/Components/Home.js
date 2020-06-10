import React, { Component } from 'react';
import Game from './Game'

class Home extends Component {

    handleStartGameClick = () => { 
        //use router to switch to game screen
    }

    render() {
        return (
            <div>
                <div>
                    <button className="playButton" onClick={this.handleStartGameClick}>New Game</button>
                    <Game />
                </div>
            </div>
        );
    }
}

export default Home;
