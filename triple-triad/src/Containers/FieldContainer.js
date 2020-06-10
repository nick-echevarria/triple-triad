import React, { Component } from 'react';
import PlayerHandContainer from './PlayerHandContainer';
import OpponentHandContainer from './OpponentHandContainer';
import PositionContainer from './PositionContainer'
import './Field.css';

const allCards = "http://localhost:3000/cards"

class FieldContainer extends Component {
    state = { 
        allCards: [],
        field: [{ position: 1, card: null }, {position: 2, card: null}, {position: 3, card: null},
            {position: 4, card: null}, {position: 5, card: null}, {position: 6, card: null},
            {position: 7, card: null}, {position: 8, card: null}, {position: 9, card: null}], 
        selectedCard: null, 
        selectedPosition: null, 
        playerHand: [], 
        opponentHand: []
    }

    componentDidMount() { 
        this.fetchAllCards();
    }

    fetchAllCards() { 
        fetch(allCards)
            .then(res => res.json())
            .then(allCards => this.setState({ allCards }, () => this.dealHands()))
    }
    
    selectCard = (selectedCard) => { 
        this.setState({ selectedCard })
    } 

    selectPosition = (selectedPosition) => { 
        if (this.state.selectedPosition !== selectedPosition && this.state.selectedCard) { 
            this.setState({ selectedPosition })
        } else if (this.state.selectedPosition === selectedPosition && this.state.selectedCard) { 
            this.playCard(); //object assign selected card to card 
        }

    }

    dealHands = () => {  
        let playerHand = this.state.allCards.slice(0, 5);
        let opponentHand = this.state.allCards.slice(5, 10);
        this.setState({ playerHand, opponentHand })
    }

    playCard = () => { 
        //needs to take selected position and card data 
        let newField = this.state.field.map(fieldItem => {
            if (fieldItem.position === this.state.selectedPosition) {
                return { ...fieldItem, card: this.state.selectedCard }
            }
            return fieldItem
        })        
        this.setState({ field: newField, selectedCard: null, selectedPosition: null})
        //update hand
    }     

    // dealHands = () => {  
    //     let i = 0;
    //     let allCardsCopy = [...this.state.allCards]
    //     let playerHand = []
    //     let opponentHand = []
    //     let dealCard = allCardsCopy.splice(allCardsCopy[Math.floor(Math.random() * allCardsCopy.length)], 1)[0]
    //     while (playerHand.length < 5) {
    //         let dealCard = allCardsCopy.splice(allCardsCopy[Math.floor(Math.random() * allCardsCopy.length)], 1)[0]
    //         playerHand.push(dealCard) 
    //         opponentHand.push(dealCard)
    //         i++
    //     }    
    //      while (playerHand.length < 5) {
        //         let dealCard = allCardsCopy.splice(allCardsCopy[Math.floor(Math.random() * allCardsCopy.length)], 1)[0]
        //         playerHand.push(dealCard) 
        //         opponentHand.push(dealCard)
        //         i++
        //     }    
    //     this.setState({ playerHand, opponentHand })
    // }

    render() {
        console.log("State", this.state)
        return (
            <div>                
                <div className="gridContainer">
                    <div>
                        <PlayerHandContainer playerHand={this.state.playerHand} selectCard={this.selectCard} />
                    </div>
                    <div className="field">
                        {this.state.field.map(position => <PositionContainer key={position.id} {...position} selectPosition={this.selectPosition}/>)}
                    </div>
                    <div>
                        <OpponentHandContainer opponentHand={this.state.opponentHand} selectCard={this.selectCard} />
                    </div>
                </div>                
            </div>
        );
    }
}

export default FieldContainer;


