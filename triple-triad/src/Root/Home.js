import React, { Component } from 'react';

class Home extends Component {

    handleStartGameClick = () => { 
        //use router to switch to game screen
    }

    render() {
        return (
            <div>
                <div>                    
                    <strong>This is the Home component!</strong>    
                </div>
            </div>
        );
    }
}

export default Home;
