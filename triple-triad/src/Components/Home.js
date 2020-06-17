import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Home.css';

class Home extends Component {

    // handleStartGameClick = () => { 
    // }

    render() {
        return (
            <div className="grid-container">                
                <button><Link to="/game">Play</Link></button>
                <h3> Welcome! </h3>
                <strong> Hello! </strong>
            </div>
        );
    }
}

export default Home;
