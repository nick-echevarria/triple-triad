import React, { Component } from 'react';
import HandContainer from '../Containers/HandContainer.js'
import FieldContainer from '../Containers/FieldContainer.js'

const allCards = "http://localhost:3000/cards"

class Game extends Component {
    state = { 
        allCards: [],
        playerHand: []
    }
    componentDidMount() { 
        this.fetchAllCards();
        this.dealHand()
    }

    fetchAllCards() { 
        fetch(allCards)
            .then(res => res.json())
            .then(allCards => this.setState({ allCards }))
    }

    dealHand = () => { 
        let i = 0;
        while (i < 5) {
            this.setState({ playerHand: this.state.playerHand.concat(this.state.allCards[Math.floor(Math.random() * this.state.allCards.length)]) })
            i++
        }
    }

    render() {
        return (
            <div>
                <FieldContainer />
                <HandContainer playerHand={this.state.playerHand} />
            </div>
        );
    }
}

export default Game;
