import React, { Component } from 'react';
import Board from './Board.js'

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
            alert("Welcome to Triple Triad It's Player One's turn!")
        } else { 
            this.setState({ currentPlayer: PLAYER_TWO })
            alert("Welcome to Triple Triad It's Player Two's turn!")
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
            <div>
                <Board currentPlayer={this.state.currentPlayer} nextTurn={this.nextTurn} turnCount={this.state.turnCount}/>
            </div>
        );
    }
}

export default Game;

