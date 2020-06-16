import React, { Component } from 'react';
import { CardContainer as Card } from './CardContainer'

class PlayerHandContainer extends Component {
    
    
    render() {
        return (
            <div>
                {this.props.playerHand.map(card => <Card key={card.id} selectCard={this.props.selectCard} {...card} />)}
            </div>
        );
    }
}

export default PlayerHandContainer;
