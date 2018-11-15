import {
    USER_LOGGED_IN , 
    USER_LOGGED_OUT , 
    USER_SIGNED_IN ,
} from '../types/users';

const users = (state = {} , action={}) => {
    switch(action.type){
        case USER_LOGGED_IN:
            return {...action.user}
        case USER_LOGGED_OUT:
            return {};
        default :
            return state
    }
} 

export default users;