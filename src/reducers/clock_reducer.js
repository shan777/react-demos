import types from '../actions/types';

const DEFAULT__STATE = {
    currentTime: new Date().toLocaleTimeString(), 
    date: new Date().toLocaleDateString(),
    color: 'lawngreen'
};

function clockReducer (state = DEFAULT__STATE, action) { 

    // console.log('Action:', action);

    //if state is null, default to that DEFAULT_STATE
    switch(action.type) {
        case types.UPDATE_TIME:
            return { ...state, currentTime: new Date().toLocaleTimeString(), color: randomColor() }; //just do ...state (deconstructuring the state) everytime
        case types.INCREASE_DATE:
            return { ...state, date: new Date (new Date(state.date).getTime() + action.payload).toLocaleDateString() };
        default:
            return state; //return state unchanged
    }
}

function randomColor() {
    return `rgb(${randomRGBNumber()}, ${randomRGBNumber()},  ${randomRGBNumber()})`;
}

function randomRGBNumber() {
    return Math.floor(Math.random() * (255+1)); 
}
export default clockReducer;