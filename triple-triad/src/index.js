import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Root from "./Root/Root.js"

render(    
        <BrowserRouter >
            <Root />
        </BrowserRouter>,
    document.getElementById('app')
    
)

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './Components/App';
// import * as serviceWorker from './serviceWorker';
// import { BrowserRouter } from 'react-router-dom'


// ReactDOM.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
//   document.getElementById('root')
// );

// serviceWorker.unregister();
