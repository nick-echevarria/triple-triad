import React, { Component } from 'react';

export class CardContainer extends Component {
    state = { 
        selected: false
    }

    getCardImage = (cardNumber) => { 
        if (cardNumber.toString().length === 2) { 
            return "img/cards/0" + cardNumber + ".png"
        } else { 
            return "img/cards/" + cardNumber + ".png"
        }
    }

    handleCardClick = (selectedCard) => { 
        this.setState({ selected: !this.state.selected });
        this.props.selectCard(selectedCard);
    }

    render() {
        let {
            name,
            top_value,
            bottom_value,
            left_value,
            right_value,
            affinity,
            card_number
        } = this.props

        return (
            <div classname="card" onClick={() => this.handleCardClick(this.props)}>
                <h2>{name}</h2>
                <h2>{top_value}</h2>
                <h2>{bottom_value}</h2>
                <h2>{left_value}</h2>
                <h2>{right_value}</h2>
                <h2>{affinity}</h2>
                <img alt={name} src={this.getCardImage(card_number)} />
            </div>
        )
    };

}

