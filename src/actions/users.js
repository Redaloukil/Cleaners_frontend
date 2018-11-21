import { 
    USER_LOGGED_IN,
    USER_LOGGED_OUT , 
    FETCH_CURRENT_USER_SUCCESS,
    CREATE_USER_REQUEST,
} from '../types/types';

import { users } from '../api';
import setAuthentificationHeader from '../setAuthentificationHeader';



// const userSignedIn = (user) => ({
//     type : USER_SIGNED_IN, 
//     user,
// })

const userLoggedIn = (user) => ({
    type : USER_LOGGED_IN, 
    user,
})

const userLoggedOut = () => ({
    type:USER_LOGGED_OUT
})

export const fetchCurrentUserSuccess = user => ({
    type: FETCH_CURRENT_USER_SUCCESS,
    user
});


export const login = (username , password , cb ) => dispatch => {
    users.login(username , password).then((user) => {
        console.log("called login");
        setAuthentificationHeader(user.token);   
        localStorage.trndy = user.token;
        dispatch(userLoggedIn(user));
        if (cb){
            cb();
        }
    })
}
export const signup = (username , email , phone_number , password  , cb) => dispatch => {
    users.signup(username , email , phone_number , password).then((user)=> {
        console.log("called signup");
        setAuthentificationHeader(user.token);
        localStorage.trndy = user.token;
        dispatch();
        if(cb){
            cb();
        }
    })
}

export const logout = () => dispatch => {
    localStorage.removeItem("trndy")
    setAuthentificationHeader();
    dispatch(userLoggedOut());
}