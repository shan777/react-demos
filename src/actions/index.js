import types from './types'; //types is just an object, not a component

//action creator ALWAYS return an action
export function tick () {
    return {
        type: types.UPDATE_TIME //passed into reducers as 2nd param , this is just the string "update_time"
    }
}

export function increaseDate(days = 1) { //this is saying 1 is the default
    const increaseInMilliseconds = 1000 * 60 * 60 * 24 * days; //milliseconds in a day

    return {
        type: types.INCREASE_DATE,
        payload: increaseInMilliseconds

    };
}

export function login(username){
    return{ //this whole object gets passed into the reducer so put any i.e. babo: username
        type: types.LOGIN,
        username: username
    }
}