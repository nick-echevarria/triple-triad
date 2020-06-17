import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'

import Home from './Home'
import Game from './Game'

const Root = () => {
    return (
        <div>
            <Switch>
                <Route component={Home} exact path='/home'/>
                <Route component={Game} path='/game' />
            </Switch>
        </div>
    );
}

export default Root;