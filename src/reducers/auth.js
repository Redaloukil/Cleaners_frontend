import {
    FETCH_CURRENT_USER_REQUEST, 
    FETCH_CURRENT_USER_SUCCESS,
    CREATE_USER_FAILURE, 
    CREATE_USER_REQUEST, 
     
} from "../types/auth";
  
export default function user(state = {}, action = {}) {
    switch (action.type) {
      case FETCH_CURRENT_USER_SUCCESS:
        return {...state , ...action.user};
    default:
        return state;
    }
}