import React, { Component } from 'react';
import Board from './Board.js'

import './Game.css'; 

const PLAYER_ONE = "playerOne"
const PLAYER_TWO = "playerTwo"

class Game extends Component {
    state = { 
        currentPlayer: "", 
        turnCount: 1
    }

    componentDidMount() { 
        this.pickStartingPlayer();
    }

    pickStartingPlayer = () => { 
        //add function for choosing animation 
        if (Math.floor(Math.random() * 2) === 0 ) { 
            this.setState({ currentPlayer: PLAYER_ONE })
            // alert("Welcome to Triple Triad It's Player One's turn!")
        } else { 
            this.setState({ currentPlayer: PLAYER_TWO })
            // alert("Welcome to Triple Triad It's Player Two's turn!")
        }
    }

    nextTurn = () => {
        if (this.state.currentPlayer === PLAYER_ONE) {
            let turnCount = this.state.turnCount
            turnCount++
            this.setState({ currentPlayer: PLAYER_TWO, turnCount })
        } else {
            let turnCount = this.state.turnCount
            turnCount++
            this.setState({ currentPlayer: PLAYER_ONE, turnCount })
        }
    }        

    render() {
        return (
            <div class="container-fluid main-container">
            <div class="row first-row">
                <div class="col-md-3 first-column">
                </div>
                <div class="col-md-6 second-column">
                </div>
                <div class="col-md-3 third-column">
                </div>
            </div>
            <div class="row second-row">
                <div class="col-md-3 fourth-column">
                </div>
                <div class="col-md-6 fifth-column">
                        <Board currentPlayer={this.state.currentPlayer} nextTurn={this.nextTurn} turnCount={this.state.turnCount}/>
                </div>
                <div class="col-md-3 sixth-column">
                </div>
            </div>
            <div class="row third-row">
                <div class="col-md-3 seventh-column">                
                </div>
                <div class="col-md-6 eighth-column">                
                </div>
                <div class="col-md-3 ninth-column">
                </div>
            </div>
        </div>    
        );
    }
}

export default Game;


