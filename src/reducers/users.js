import {
    USER_LOGGED_IN , 
    USER_LOGGED_OUT , 
    USER_SIGNED_IN ,
} from '../types/users';

const users = (state = {} , action) => {
    switch(action.type){
        case(USER_LOGGED_IN):
            return state;
        case(USER_SIGNED_IN):
            return state;
        case(USER_LOGGED_OUT):
            return state;
        default :
            return state
    }
} 

export default users;