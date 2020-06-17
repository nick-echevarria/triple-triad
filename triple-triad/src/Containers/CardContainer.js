import React, { Component } from 'react';
import '../CSS/Card.css'

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
                {/* <h2 className="topValue">{top_value}</h2>
                <h2 className="bottomValue">{bottom_value}</h2>
                <h2 className="leftValue">{left_value}</h2>
                <h2 className="rightValue">{right_value}</h2>
                <h2 className="affinity">{affinity}</h2> */}
                <img className={`cardImage ${possession}-card`} alt={name} src={this.getCardImage(card_number)}  />
            </div>
        )
    };
}

export default CardContainer