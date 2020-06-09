import React, { Component } from 'react';
import PlayerHandContainer from './PlayerHandContainer'
import OpponentHandContainer from './OpponentHandContainer'


class FieldContainer extends Component {
    state = { 
        field: [
            ["position1", "position2", "position3"],
            ["position4", "position5", "position6"],
            ["position7", "position8", "position9"]
        ], 
        selectedCard: null
    }

    playCard = (moveInfo) => { 
        let fieldCopy = [...this.state.field]
        let selectedPositionIndex = fieldCopy.findIndex(position => position === moveInfo.position)        
        fieldCopy.splice(selectedPositionIndex, 1, this.state.selectedCard)
        this.setState({ field: fieldCopy })
    }

    selectCard = (selectedCard) => { 
        this.setState({ selectedCard })
    }

    render() {
        return (
            <div>
                <PlayerHandContainer selectCard={this.selectCard}/>
                <div className="field">
                    
                </div>
                <OpponentHandContainer selectCard={this.selectCard}/>
            </div>
        );
    }
}

export default FieldContainer;


