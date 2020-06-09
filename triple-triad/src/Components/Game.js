import React, { Component } from 'react';
import FieldContainer from '../Containers/FieldContainer.js'

class Game extends Component {
    state = { 
        currentUser: ""
    }

    pickStartingPlayer = () => { 
        //add function for choosing animation 
        if (Math.floor(Math.random() * 2) === 0 ) { 
            this.setState({ currentUser: "playerOne"})
        } else { 
            this.setState({ currentUser: "playerTwo"})
        }
    }

    render() {
        return (
            <div>
                <FieldContainer />
            </div>
        );
    }
}

export default Game;

//determine who goes first
//have each player take turns 
//determine winner

