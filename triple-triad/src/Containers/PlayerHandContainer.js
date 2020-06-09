import React, { Component } from 'react';
import { CardContainer as Card } from './CardContainer'

const allCards = "http://localhost:3000/cards"

class PlayerHandContainer extends Component {
    state = { 
        allCards: [],
        playerHand: []
    }

    componentDidMount() { 
        this.fetchAllCards();
    }

    fetchAllCards() { 
        fetch(allCards)
            .then(res => res.json())
            .then(allCards => this.setState({ allCards }, () => this.dealHand()))
    }

    dealHand = () => {  
        let i = 0;
        let dealtHand = [];
        while (i < 5) {
            dealtHand.push(this.state.allCards[Math.floor(Math.random() * this.state.allCards.length)])
            i++
        }    
        this.setState({ playerHand: dealtHand })
    }

    render() {
        return (
            <div>
                {this.state.playerHand.map(card => <Card key={card.id} selectCard={this.props.selectCard} {...card}/>)}
            </div>
        );
    }
}

export default PlayerHandContainer;
