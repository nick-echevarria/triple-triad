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
        {position: 2,
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
            playedCard_value: 'left_value',
            otherCard_value: 'right_value'
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

class Board extends Component {
    state = { 
        allCards: [],
        board: [{ position: 1, card: null }, {position: 2, card: null}, {position: 3, card: null},
            {position: 4, card: null}, {position: 5, card: null}, {position: 6, card: null},
            {position: 7, card: null}, {position: 8, card: null}, {position: 9, card: null}], 
        selectedCard: null, 
        selectedPosition: null, 
        playerHand: [], 
        opponentHand: [], 
        playerScore: 5, 
        opponentScore: 5
    }    

    componentDidMount() { 
        this.fetchAllCards();
    }

    fetchAllCards() { 
        fetch(allCards)
            .then(res => res.json())
            .then(allCards => this.setState({ allCards }, () => this.dealHands()))
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
        playerHand.map(card => card.possession = "blue")
        opponentHand.map(card => card.possession = "red")
        this.setState({ playerHand, opponentHand })
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

    isValid(boardItem) { 
        if (boardItem["card"] !== null) { 
            alert("There's already a card there.")
            return boardItem
        } else {
            return { ...boardItem, card: this.state.selectedCard }
        }
    }

    calculateScore = (positionClone) => { 
        if (positionClone.card.possession === "red") {
            let playerScore = this.state.playerScore
            let opponentScore = this.state.opponentScore
            
            playerScore--
            opponentScore++
    
            this.setState({ playerScore, opponentScore })
        } else {                             
            let playerScore = this.state.playerScore
            let opponentScore = this.state.opponentScore
            
            playerScore++
            opponentScore--
    
            this.setState({ playerScore, opponentScore })
        }
    }  

    compareCardValues(newBoard) {
        let board = newBoard
        let playedCard = this.state.selectedCard
        let selectedPosition = this.state.selectedPosition
        

        let flippedPositions = comparisonMap[selectedPosition].map(comparisonObj => {
            let position = comparisonObj.position - 1
            let boardPosition = board[position]
                
            if (boardPosition.card) {
                if (playedCard[comparisonObj.playedCard_value] === "A" && board[position].card[comparisonObj.otherCard_value] <= 9 && playedCard.possession !== board[position].card.possession) {
                    let positionClone = { position: board[position]["position"] } // {position: 9}
                    const card = board[position]["card"] // {position: 9, card: {all of the key/values}
                    let cardClone = card.possession === "blue" ? { ...card, possession: "red" } : { ...card, possession: "blue" } //  to change pos value
                    positionClone.card = cardClone;

                    this.calculateScore(positionClone)
                    
                    return positionClone                    
                } else if (playedCard[comparisonObj.playedCard_value] > board[position].card[comparisonObj.otherCard_value] && playedCard.possession !== board[position].card.possession) {
                    let positionClone = { position: board[position]["position"] } // {position: 9}
                    const card = board[position]["card"] // {position: 9, card: {all of the key/values}
                    let cardClone = card.possession === "blue" ? { ...card, possession: "red" } : { ...card, possession: "blue" } //  to change pos value
                    positionClone.card = cardClone;

                    this.calculateScore(positionClone)
                    
                    return positionClone
                } else if (playedCard[comparisonObj.playedCard_value] > board[position].card[comparisonObj.otherCard_value] && playedCard.possession === board[position].card.possession) {
                    return board[position]
                } else if (playedCard[comparisonObj.playedCard_value] < board[position].card[comparisonObj.otherCard_value]) { 
                    return board[position]
                } else if (playedCard[comparisonObj.playedCard_value] === board[position].card[comparisonObj.otherCard_value]) { 
                    return board[position]
            } 
                } else { 
                    return boardPosition
                }
            }
        )
        return flippedPositions
    }

    updateBoard = (newestBoard) => {
        let flippedPositions = this.compareCardValues(newestBoard) 
        console.log("Flipped", flippedPositions)

        let newBoard = newestBoard.map(positionObj => { 
            let matchedPosition = flippedPositions.find(flippedPosition => flippedPosition.position === positionObj.position)

            if (matchedPosition) {
                return matchedPosition                    
                } else {                
                return positionObj
            }
        })
        console.log(newBoard)
        return newBoard
    }    

    updateHand() { 
        if (this.props.currentPlayer === PLAYER_ONE) { 
            let playerHand = this.state.playerHand.filter(card => card.id !== this.state.selectedCard.id)
            this.setState({ playerHand }, this.props.nextTurn())            
        } else { 
            let opponentHand = this.state.opponentHand.filter(card => card.id !== this.state.selectedCard.id)
            this.setState({ opponentHand }, this.props.nextTurn())
        }
    }

    playCard = () => { 
        let boardCopy = [...this.state.board]

        let updatedBoard = boardCopy.map(boardItem => {
            if (boardItem["position"] === this.state.selectedPosition) {
                return this.isValid(boardItem)
            } else {
                return boardItem
            }
        })

        let finalBoard = this.updateBoard(updatedBoard)
        console.log("Final Board", finalBoard)

        this.updateHand()

        this.setState({ board: finalBoard, selectedCard: null, selectedPosition: null })
    }  

    render() {  
        // if (this.props.turnCount === 10 && this.state.playerScore > this.state.opponentScore) {
        //     alert("Player One wins!")            
        // } else if (this.props.turnCount === 10 && this.state.playerScore < this.state.opponentScore) { 
        //     alert("Player Two Wins!")
        // } else if (this.props.turnCount === 10 && this.state.playerScore === this.state.opponentScore){ 
        //     alert("It's A Draw!")
        // }
        return (
            <div class="container board-container">
                <div class="row first-board-row">
                        <div class="col-md-4 first-board-column">
                        </div>
                        <div class="col-md-4 second-board-column">
                        </div>
                        <div class="col-md-4 third-board-column">
                        </div>
                </div>
                <div class="row second-board-row">
                        <div class="col-md-4 fourth-board-column">
                        </div>
                        <div class="col-md-4 fifth-board-column"> 
                        </div>
                        <div class="col-md-4 sixth-board-column">
                        </div>
                </div>
                <div class="row third-board-row">
                        <div class="col-md-4 seventh-board-column">                
                        </div>
                        <div class="col-md-4 eighth-board-column">                
                        </div>
                        <div class="col-md-4 ninth-board-column">
                        </div>
                </div>
            </div>
        );
    }
}

export default Board;



{/* <div>                
                <div className="gridContainer" style={{border: "2px solid black", margin: "auto"}}>
                    <div className="playerHand" >
                        <PlayerHandContainer playerHand={this.state.playerHand} selectCard={this.selectCard} />
                    </div>
                    <img className="playerScore" src={`img/score-${this.state.playerScore}.png`} alt="player-score"/>
                    <div className="board">
                        {this.state.board.map(boardObject => <PositionContainer key={boardObject["position"]} {...boardObject} selectPosition={this.selectPosition}/>)}
                    </div>
                    <div className="opponentHand">
                        <OpponentHandContainer opponentHand={this.state.opponentHand} selectCard={this.selectCard} />
                    </div>
                    <img className="opponentScore" src={`img/score-${this.state.opponentScore}.png`} alt="player-score"/>
                </div>                
            </div> */}