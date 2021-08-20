import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateProvider} from './RootStateContext';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
    <React.StrictMode>
        <RootStateProvider>
            <Router>
                <App/>
            </Router>
        </RootStateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

