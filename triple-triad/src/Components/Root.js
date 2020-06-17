import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'

import Home from './Home'
import Game from './Game'

const Root = () => {
    return (
        <div>
            <strong>This is the Root</strong>
            <button><Link to="/game">Play</Link></button>
            <Switch>
                <Route component={Home} exact path='/'/>
                <Route component={Game} path='/game' />
            </Switch>
        </div>
    );
}

export default Root;