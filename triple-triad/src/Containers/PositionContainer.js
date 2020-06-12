import React, { Component } from 'react';
import CardContainer from './CardContainer'

class PositionContainer extends Component {  

    render() {
        return (
            <div className={`position-${this.props.position}`} onClick={() => this.props.selectPosition(this.props.position)}>
                position {this.props.position} {this.props.card && <CardContainer key={this.props.position.key} {...this.props.position} {...this.props.card} />
                }
            </div>
        );
    }
}

export default PositionContainer;

