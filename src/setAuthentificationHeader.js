import axios from 'axios';

export default (token = null) => {
    if(token) {
        axios.defaults.headers.common.authorization = `Bearer ${token}`;
        console.log(axios.defaults.headers.common.authorization)
    }else {
        delete axios.defaults.headers.common.authorization;
    }
}