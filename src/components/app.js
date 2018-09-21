import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './home';
import About from './about';
import Articles from './articles';

const App = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Articles">Articles</Link>
                </li>
            </ul>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/articles" component={Articles}/>
        </div>
    </Router>
);

export default App;
