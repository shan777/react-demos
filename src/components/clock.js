import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tick, increaseDate } from '../actions';


class Clock extends Component {
    componentDidMount() {
        setInterval(this.props.tick, 1000); //call this function every 1 second, calling tick function, passed into reducer (clock_reducer)
        
    }
    render() {
        // console.log('Clock Props: ', this.props);
        const clockColor = {
            color: this.props.color,
            transitionDuration: '350ms'
        };

        return ( //every time it renders, it changes.....
            <div>
                <h2>{this.props.date} <button onClick={ () => this.props.increaseDate(1)}>Next Day</button></h2>
                <h1 style={clockColor}>{this.props.time}</h1>
            </div>
        );
    }
}

function mapStateToProps (state) {
    // console.log('Redux State:', state);

    return {
        time: state.clock.currentTime, //changed here
        date: state.clock.date,
        color: state.clock.color
        
    }; 
    //whatever returned from this mapStateToProps function is added to your component props
    //can name mapStateToProps whatever, doesn't matter.. 
}

export default connect( mapStateToProps, {
    tick: tick,
    increaseDate: increaseDate
} ) (Clock);