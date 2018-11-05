import { USER_SIGNED_IN , USER_LOGGED_OUT , USER_LOGGED_IN } from '../types/users';
import { users } from '../../api';
import setAuthentificationHeader from ''


const userLoggedIn = (user) => ({
    type : USER_LOGGED_IN, 
    user,
})

const userLoggedOut = () => ({
    type:USER_LOGGED_OUT
})



export const login = (username , password ) => {
    const user = login(username , password)
    if(user.token){
        localStorage.trndy = user.token
        dispatch(userLoggedIn({...user , loaded:true})) 
    }
}

export const signup = () => {
    //Signup call came here
}

const logout = () => {
    //Logout call came here 
}