import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    
} from "../types/users";
  
export default function user(state = { loaded: false }, action = {}) {
    switch (action.type) {
      case USER_LOGGED_IN:
        return { ...action.user, loaded: true };
    case USER_LOGGED_OUT:
        return { loaded: true };
      default:
        return state;
    }
}