import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Greeting from './greeting';

const App = () => (
    <div>
        <div className="app">
            <Greeting name="Jim" favColor="blue" food="beets" favDrink="boba"/> 
            <Greeting name ="Sam" favColor="hotpink" number={23}/>
            <img src={logo} className="logo rotate"/>
            <h1>Welcome to React</h1>
        </div>
    </div>
);
//pass from outside world into component through props,
//every single key/value pair will be in that props object 
//can pass object, number, boolean, any datatype, 
//even function into it

export default App;
