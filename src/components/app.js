import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Greeting from './greeting';

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="logo rotate"/>
            <h1>Welcome to React</h1>
            <Greeting name="Sarah" />
        </div>
    </div>
);

export default App;
