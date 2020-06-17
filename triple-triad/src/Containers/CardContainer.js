import React, { Component } from 'react';
import './Card.css'

export class CardContainer extends Component {

    getCardImage = (cardNumber) => { 
        if (cardNumber.toString().length === 2) { 
            return "img/cards/0" + cardNumber + ".png"
        } else { 
            return "img/cards/" + cardNumber + ".png"
        }
    }    

    handleCardClick = (selectedCard) => { 
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
            card_number, 
            possession
        } = this.props
        return (
            <div className="card" onClick={() => this.handleCardClick(this.props)}>
                <img className={`card-image ${possession}-card`} alt={name} src={this.getCardImage(card_number)}  />
                <img className="top-value" alt="rank" src={`img/rank-${top_value}.png`} />
                <img className="bottom-value" alt="rank" src={`img/rank-${bottom_value}.png`}  />
                <img className="left-value" alt="rank" src={`img/rank-${left_value}.png`}  />
                <img className="right-value" alt="rank" src={`img/rank-${right_value}.png`}  />              
            </div>
        )
    };
}

export default CardContainer