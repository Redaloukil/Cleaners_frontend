import { combineReducers } from 'redux';
import users from './reducers/users';


const store = combineReducers({
    users,
})

export default store;