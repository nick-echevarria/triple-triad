import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {

    handleStartGameClick = () => { 
        //use router to switch to game screen
    }

    render() {
        return (
            <div>
                <div>                    
                    <button><Link to="/game">Play</Link></button>
                </div>
            </div>
        );
    }
}

export default Home;
