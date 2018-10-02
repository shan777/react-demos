import { combineReducers } from 'redux';
import clockReducer from './clock_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({  //combineReducers takes an object
    clock: clockReducer, //passed into clockReducer..
    user: userReducer //this is blue printing our state out
}); 

export default rootReducer;