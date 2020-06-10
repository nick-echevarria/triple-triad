import React, { Component } from 'react';
import CardContainer from './CardContainer'

class PositionContainer extends Component {    

    // determinePositionContent = () => { 
    //     if (this.props does not contain card name key ) {
    //         return
    //     } else { 
    //         return  
    //     }
    // }    

    render() {
        return (
            <div className={`${this.props.position}`} onClick={() => this.props.selectPosition(this.props.position)}>
                {this.props.card && <CardContainer key={this.props.position.key} {...this.props.position} {...this.props.card} />}
            </div>
        );
    }
}

export default PositionContainer;

//track if position was clicked and if so, place card on second click 