import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';  //better place to do it
import App from './components/app';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
