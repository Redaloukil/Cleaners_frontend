import {
    USER_LOGGED_IN ,
    USER_SIGNED_IN ,
    USER_LOGGED_OUT,
} from '../types/users';

const users = (state , action) => {
    switch(action.type){
        case(USER_LOGGED_IN):
            return 0;
        case(USER_LOGGED_IN):
            return 0;
        case(USER_SIGNED_IN):
            return 0;
    }
} 

export default users;