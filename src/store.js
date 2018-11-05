import { combineReducers } from 'redux';
import users from './app/reducers/users';


const store = combineReducers({
    users,
})