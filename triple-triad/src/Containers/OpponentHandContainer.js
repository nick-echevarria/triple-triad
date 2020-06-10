import React, { Component } from 'react';
import { CardContainer as Card } from './CardContainer'

class OpponentHandContainer extends Component {   

    render() {
        return (
            <div>
                {this.props.opponentHand.map(card => <Card key={card.id} selectCard={this.props.selectCard} {...card}/>)}
            </div>
        );
    }
}

export default OpponentHandContainer;
