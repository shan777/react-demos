import types from '../actions/types';

const DEFAULT_STATE = {
    username: 'Guest'
};

export default (state = DEFAULT_STATE, action) => { //if state is null or undefined then it is set to DEFAULT_STATE
    switch(action.type) {
        case types.LOGIN:
            return { ...state, username: action.username };
        default:
            return state;
    }
};  //this is most commonly how you are to see it..

