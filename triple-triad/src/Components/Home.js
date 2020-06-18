import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Home.css';

class Home extends Component {

    //set up router so that clicking play button takes us to game

    render() {
        return (
            <div class="container-fluid main-container">
                <div class="row first-row">
                    <div class="col-md-4 first-column">
                    </div>
                    <div class="col-md-4 second-column">
                    </div>
                    <div class="col-md-4 third-column">
                    </div>
                </div>
                <div class="row second-row">
                    <div class="col-md-4 fourth-column">
                    </div>
                    <div class="col-md-4 fifth-column">
                        <img class="logo" src="triple-triad-logo.png" alt="logo" />
                        <button type="button" class="play-button">Play</button>
                        <button type="button" class="collection-button">Collection</button>
                    </div>
                    <div class="col-md-4 sixth-column">
                    </div>
                </div>
                <div class="row third-row">
                    <div class="col-md-4 seventh-column">                
                    </div>
                    <div class="col-md-4 eighth-column">                
                    </div>
                    <div class="col-md-4 ninth-column">
                    </div>
                </div>
            </div>    
        );
    }
}

export default Home;
