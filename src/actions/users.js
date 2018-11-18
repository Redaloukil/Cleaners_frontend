import { USER_SIGNED_IN , USER_LOGGED_OUT , USER_LOGGED_IN } from '../types/users';
import { FETCH_CURRENT_USER_SUCCESS } from '../types/auth';
import { users } from '../api';
import setAuthentificationHeader from '../setAuthentificationHeader';



const userSignedIn = (user) => ({
    type : USER_SIGNED_IN, 
    user,
})

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


export const login = (username , password ) => dispatch => {
    users.login(username , password).then((user) => {
        setAuthentificationHeader(user.token)   
        localStorage.trndy = user.token
        dispatch(userLoggedIn({...user}))
    })
}
export const signup = (username , email , phone_number , password ) => dispatch => {
    users.signup(username , email , phone_number , password).then((user)=> {
        localStorage.trndy = user.token
        dispatch(userSignedIn({...user}))
    })
}

export const logout = () => dispatch => {
    localStorage.removeItem("trndy")
    setAuthentificationHeader();
    dispatch(userLoggedOut());
}