import {
    CREATE_USER_REQUEST , 
    FETCH_CURRENT_USER_REQUEST , 
    FETCH_CURRENT_USER_SUCCESS , 
} from '../types/auth';

const auth = (state = {} , action) => {
    switch(action.type){
        case():
            return 0;
        case(USER_SIGNED_IN):
            return 0;
        case(USER_LOGGED_OUT):
            return 0;
        default :
            return state
    }
} 

export default auth;