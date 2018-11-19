import { combineReducers , createStore , applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import users from './reducers/users';


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    users,
})

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, thunk),
);

export default store;