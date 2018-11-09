import { 
    USER_SIGNED_IN , 
    USER_LOGGED_OUT , 
    USER_LOGGED_IN 
} from '../types/users';
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



export const login = (username , password ) => dispatch => {
    const user = users.login(username , password)
    console.log(user)
    if(user.token){
        localStorage.trndy = user.token
        dispatch(userLoggedIn({...user , loaded:true})) 
        
    }
}

export const signup = (username , email , phone_number , password ) => dispatch => {
    const user = signup(username , email , phone_number , password)
    if(user.token) {
        localStorage.trndy = user.token
        dispatch(userSignedIn({...user , loaded:true }))
    }
}

export const logout = () => dispatch => {
    localStorage.removeItem("trndy")
    setAuthentificationHeader();
    dispatch(userLoggedOut());
}