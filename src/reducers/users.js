import {USER_LOGGED_IN , USER_LOGGED_OUT , FETCH_CURRENT_USER_SUCCESS } from '../types/types';


const users = (state = {} , action={}) => {
    switch(action.type){
        case USER_LOGGED_IN:
            console.log({...state})
            return {...action.user}
        case USER_LOGGED_OUT:
            return {};
        case FETCH_CURRENT_USER_SUCCESS:
            return { ...state, ...action.user};
        default :
            return state
    }
} 

export default users;