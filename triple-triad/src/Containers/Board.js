import React, { Component } from 'react';
import PlayerHandContainer from './PlayerHandContainer';
import OpponentHandContainer from './OpponentHandContainer';
import PositionContainer from './PositionContainer'
import './Board.css';

const allCards = "http://localhost:3000/cards"
const PLAYER_ONE = "playerOne"
const PLAYER_TWO = "playerTwo"

const comparisonMap = {
    1: [
        {
            position: 2,
            playedCard_value: 'right_value',
            otherCard_value: 'left_value'
        },
        {
            position: 4,
            playedCard_value: 'bottom_value',
            otherCard_value: 'top_value'
        }
    ], 
    2: [
        {
            position: 1,
            playedCard_value: 'left_value',
            otherCard_value: 'right_value'
        },
        {
            position: 3,
            playedCard_value: 'right_value',
            otherCard_value: 'left_value'
        }, 
        {
            position: 5,
            playedCard_value: 'bottom_value',
            otherCard_value: 'top_value'
        }
    ], 
    3: [
        {
            position: 2,
            playedCard_value: 'left_value',
            otherCard_value: 'right_value'
        },
        {
            position: 6,
            playedCard_value: 'bottom_value',
            otherCard_value: 'top_value'
        }
    ], 
    4: [
        {
            position: 1,
            playedCard_value: 'top_value',
            otherCard_value: 'bottom_value'
        },
        {
            position: 5,
            playedCard_value: 'right_value',
            otherCard_value: 'left_value'
        }, 
        {
            position: 7,
            playedCard_value: 'bottom_value',
            otherCard_value: 'top_value'
        }
    ],
    5: [
        {
            position: 2,
            playedCard_value: 'top_value',
            otherCard_value: 'bottom_value'
        },
        {
            position: 4,
            playedCard_value: 'left_value',
            otherCard_value: 'right_value'
        }, 
        {
            position: 6,
            playedCard_value: 'right_value',
            otherCard_value: 'left_value'
        }, 
        {
            position: 8,
            playedCard_value: 'bottom_value',
            otherCard_value: 'top_value'
        }
    ], 
    6: [
        {
            position: 3,
            playedCard_value: 'top_value',
            otherCard_value: 'bottom_value'
        },
        {
            position: 5,
            playedCard_value: 'left_value',
            otherCard_value: 'right_value'
        }, 
        {
            position: 9,
            playedCard_value: 'bottom_value',
            otherCard_value: 'top_value'
        }
    ], 
    7: [
        {
            position: 4,
            playedCard_value: 'top_value',
            otherCard_value: 'bottom_value'
        },
        {
            position: 8,
            playedCard_value: 'right_value',
            otherCard_value: 'left_value'
        }
    ], 
    8: [
        {
            position: 5,
            playedCard_value: 'top_value',
            otherCard_value: 'bottom_value'
        },
        {
            position: 7,
            playedCard_value: 'right_value',
            otherCard_value: 'left_value'
        }, 
        {
            position: 9,
            playedCard_value: 'right_value',
            otherCard_value: 'left_value'
        }
    ],
    9: [
        {
            position: 6,
            playedCard_value: 'top_value',
            otherCard_value: 'bottom_value'
        },
        {
            position: 8,
            playedCard_value: 'left_value',
            otherCard_value: 'right_value'
        }
    ]
}

// use map to create an array of neighborcard objects with possession: 'new color' if they should be updated
// use this to calculate your new board 
// let neighborUpdate = comparisonMap[position].map(neighbor => {
//     if ( playerCard['new_card_val'] > neighbor['other_card_val']) {
//         return { ...neighbor, possession}
//     }
// })

class Board extends Component {
    state = { 
        allCards: [],
        board: [{ position: 1, card: null }, {position: 2, card: null}, {position: 3, card: null},
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

    // computerPlay = () => { 
    //     //take first card from opponent hand 
    //     //find first empty position in board 
    //     //place that card
    // }

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
            this.playCard(); 
        }
    }

    playCard = () => { 
        //takes selectedCard and pushes into selectedPosition
        let newBoard = this.state.board.map(boardItem => {
            if (boardItem.position === this.state.selectedPosition) {
                console.log(boardItem)
                this.checkPlay(boardItem.position, boardItem.card)               
                return { ...boardItem, card: this.state.selectedCard }                
            }
            return boardItem
        })
        //use selected card to filter hand so that it returns a new array 
        if (this.props.currentPlayer === PLAYER_ONE) { 
            let playerHand = this.state.playerHand.filter(card => card.id !== this.state.selectedCard.id)
            this.setState({ playerHand }, this.props.nextTurn())            
        } else { 
            let opponentHand = this.state.opponentHand.filter(card => card.id !== this.state.selectedCard.id)
            this.setState({ opponentHand }, this.props.nextTurn())

        }
        this.setState({ board: newBoard, selectedCard: null, selectedPosition: null })
    }  
    
    checkPlay = (position, playedCard) => { 

        const [POS_ONE_CARD,
                POS_TWO_CARD,
                POS_THREE_CARD,
                POS_FOUR_CARD,
                POS_FIVE_CARD,
                POS_SIX_CARD,
                POS_SEVEN_CARD,
                POS_EIGHT_CARD,
                POS_NINE_CARD] = this.state.board.map(boardObj => boardObj.card)

        if (position === 1) { 
            if (POS_ONE_CARD) { 
                return alert("There's already a card there!")
            } else if (POS_TWO_CARD && POS_FOUR_CARD) { 
                if (playedCard.right_value > POS_TWO_CARD.left_value && playedCard.bottom_value > POS_FOUR_CARD.top_value) {
                    POS_TWO_CARD["possession"] = "blue"
                    POS_FOUR_CARD["possession"] = "blue"
                } else if (playedCard.right_value < POS_TWO_CARD.left_value && playedCard.bottom_value > POS_FOUR_CARD.top_value) { 
                    POS_FOUR_CARD["possession"] = "blue"
                } else if (playedCard.right_value > POS_TWO_CARD.left_value && playedCard.bottom_value < POS_FOUR_CARD.top_value) {
                    POS_TWO_CARD["possession"] = "blue"
                } 
            } else if (POS_TWO_CARD && !POS_FOUR_CARD) { 
                if (playedCard.right_value > POS_TWO_CARD.left_value) { 
                    POS_TWO_CARD["possession"] = "blue"
                } else { 
                    return
                }
            } else if (!POS_TWO_CARD && POS_FOUR_CARD) { 
                if (playedCard.bottom_value > POS_FOUR_CARD.top_value) { 
                    POS_FOUR_CARD["possession"] = "blue"
                } else { 
                    return
                }
            } else if (!POS_TWO_CARD && !POS_FOUR_CARD) { 
                return
            } 
        }
    }

    dealHands = () => {  
        let allCardsCopy = [...this.state.allCards]
        let playerHand = []
        let opponentHand = []
        while (playerHand.length < 5) {
            let newCard = allCardsCopy.splice([Math.floor(Math.random() * allCardsCopy.length)], 1)[0]
            playerHand.push(newCard)             
        }    
        while (opponentHand.length < 5) {
            let newCard = allCardsCopy.splice([Math.floor(Math.random() * allCardsCopy.length)], 1)[0]
            opponentHand.push(newCard)
        }    
        this.setState({ playerHand, opponentHand })
    }

    render() {
        return (
            <div>                
                <div className="gridContainer">
                    <div className="playerHand" >
                        <PlayerHandContainer playerHand={this.state.playerHand} selectCard={this.selectCard} />
                    </div>
                    <div className="board">
                        {this.state.board.map(position => <PositionContainer key={position.id} {...position} selectPosition={this.selectPosition}/>)}
                    </div>
                    <div className="opponentHand">
                        <OpponentHandContainer opponentHand={this.state.opponentHand} selectCard={this.selectCard} />
                    </div>
                </div>                
            </div>
        );
    }
}

export default Board;

// 1. create isValid function
// 2. make it so that cards in hand have respective color
// 3. create comparisonMap
// 4. have neighborUpdate work 

