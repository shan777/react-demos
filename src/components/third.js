import React from 'react';
import pic from './../../dist/bike.jpg';

export default () => {
    const miniContainer = {
        background: 'silver',
        borderRadius: '24px',
        display: 'inline-block',
        color: 'black',
        padding: '50px'
    }

    const thirdContainer = {
        font: 'bold 72px Arial',
        textShadow: '2px 2px 3px rgba(255, 255, 255, 0.5)',
        // webkitBackgroundClip: 'text',
        backgroundColor: 'rgb(255, 0, 242)',
        color: 'transparent',
        margin: '25px'
    }

    const small = {
        width: '500px'
    }
    return(
        <div>
        <h2 style={miniContainer}>Styling using Object</h2>
        <h1 style={thirdContainer}>third</h1>
        <img style={small} src={pic}></img>
        </div>
    );
}