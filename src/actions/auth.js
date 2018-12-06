import { 
    USER_LOGGED_IN,
    USER_LOGGED_OUT , 
    FETCH_CURRENT_USER_SUCCESS,
    CREATE_USER_REQUEST,
    USER_SIGNED_IN,
} from '../types/types';

import { users } from '../api';
import setAuthentificationHeader from '../setAuthentificationHeader';


export const userLoggedIn = (user) => ({
    type : USER_LOGGED_IN, 
    user,
})

export const userLoggedOut = () => ({
    type:USER_LOGGED_OUT
})



export const login = (username , password , cb ) => dispatch => {
    users.login(username , password).then((user) => {
        setAuthentificationHeader(user.token);   
        localStorage.trndy = user.token;
        dispatch(userLoggedIn(user));
        if (cb){
            cb();
        }
    }).catch((err)=> {
        console.log(err);
    })
}

export const signup = (username , email , phone_number , password  , cb) => dispatch => {
    users.signup(username , email , phone_number , password).then((user)=> {
        console.log(user);
        setAuthentificationHeader(user.token);
        localStorage.trndy = user.token;
        dispatch(userLoggedIn(user));
        if(cb){
            cb();
        }
    }).catch((err)=> {
        console.log(err);
    })
}

export const logout = (cb) => (dispatch) => {
    localStorage.removeItem("trndy");
    setAuthentificationHeader();
    dispatch(userLoggedOut());
    if (cb){
        cb();
    }
}