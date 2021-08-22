import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateProvider} from './RootStateContext';
// import { BrowserRouter as Router } from 'react-router-dom';
import {Router} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from 'mobx-react-router'
import routing from "./store/routing";

const browserHistory = createBrowserHistory()

const history = syncHistoryWithStore(browserHistory, routing)



ReactDOM.render(
    <React.StrictMode>
        <RootStateProvider>
            <Router history={history}>
                <App/>
            </Router>
        </RootStateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

