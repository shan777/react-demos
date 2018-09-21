import React from 'react';
import '../assets/css/app.css';
import emoji from '../assets/images/emoji.jpg';
import Second from './second';
import Third from './third';

const App = () => (
    <div>
        <div className="firstContainer">
            <p className="firstP">-----Using style.css-----</p>
            <img className="firstImg" src={emoji}/>
        </div>
        <Second/>
        <Third/>
    </div>
);

export default App;
