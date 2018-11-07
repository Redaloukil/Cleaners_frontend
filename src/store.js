import { combineReducers , createStore , applyMiddleware} from 'redux';
import users from './reducers/users';
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(
    users,
)

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, thunk),
);

export default store;