import { 
    USER_SIGNED_IN , 
    USER_LOGGED_OUT , 
    USER_LOGGED_IN 
} from '../types/users';
import { users } from '../../api';
import setAuthentificationHeader from ''


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



export const login = (username , password ) => dispatch => {
    const user = login(username , password)
    if(user.token){
        localStorage.trndy = user.token
        dispatch(userLoggedIn({...user , loaded:true})) 
    }
}

export const signup = (username , email , phone_number , password ) => {
    const user = signup(username , email , phone_number , password)
    if(user.token) {
        localStoragetrndy = user.token
        dispatch(userSignedIn({...user , loaded:true }))
    }
}

export const logout = () => dispatch => {
    localStorage.removeItem("trndy")
    setAuthentificationHeader();
    dispatch(userLoggedOut());
}