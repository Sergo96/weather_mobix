import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateProvider} from './RootStateContext';
import {Router} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from 'mobx-react-router'
import routing from "./store/routing";



const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routing);



ReactDOM.render(
    <React.StrictMode>
        <RootStateProvider>
            <React.Suspense fallback={<div>...Loading</div>}>
                <Router history={history}>
                    <App/>
                </Router>
            </React.Suspense>
        </RootStateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

