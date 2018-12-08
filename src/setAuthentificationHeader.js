import axios from 'axios';

export default (token = null) => {
    if(token) {
        console.log("token setted in header")
        axios.defaults.headers.common.Authorization = `Token ${token}`;
        console.log(axios.defaults.headers.common.Authorization);
    }else {
        delete axios.defaults.headers.common.Authorization;
    }
}