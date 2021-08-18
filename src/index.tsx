import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RootStateProvider } from './RootStateContext';

ReactDOM.render(
  <React.StrictMode>
    <RootStateProvider>
      <App />
    </RootStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

