import React, { Component } from 'react';
import FieldContainer from '../Containers/FieldContainer.js'

class Game extends Component {
    state = { 
        currentPlayer: ""
    }

    // define turn logic here 

    componentDidMount() { 
        this.pickStartingPlayer();
    }

    pickStartingPlayer = () => { 
        //add function for choosing animation 
        if (Math.floor(Math.random() * 2) === 0 ) { 
            this.setState({ currentPlayer: "playerOne"})
        } else { 
            this.setState({ currentPlayer: "playerTwo"})
        }
    }

    render() {
        return (
            <div>
                <FieldContainer currentPlayer={this.state.currentPlayer}/>
            </div>
        );
    }
}

export default Game;

//determine who goes first
//have each player take turns 
//determine winner

