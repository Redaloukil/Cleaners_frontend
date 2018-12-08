
import axios from 'axios';




const API_ROOT = 'http://localhost:8000/';




export const users = {
    login: (username ,password) =>
        axios.post("http://localhost:8000/users/login/", { username , password }).then(res => res.data),
    signup: user =>
        axios.post("/api/users", { user }).then(res => res.data.user),
    confirm: token =>
      axios
        .post("/api/auth/confirmation", { token })
        .then(res => res.data.user),
    resetPasswordRequest: email =>
      axios.post("/api/auth/reset_password_request", { email }),
    validateToken: token => axios.post("/api/auth/validate_token", { token }),
    resetPassword: data => axios.post("/api/auth/reset_password", { data }),
    fetchCurrentUser: () =>
      axios.get("http://localhost:8000/users/users/").then(res => res.data.user)
  }
export const orders =  {

}


