import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Game from './Game'

const Root = () => {
    return (
        <div>
            <strong>This is the Root</strong>
            <Switch>
                <Route component={ Home } path='/'/>
                <Route component={Game} path='/game' />
            </Switch>
        </div>
    );
}

export default Root;