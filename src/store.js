import { combineReducers , createStore , applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import createSagaMiddleware , { SagaMiddleware} from "redux-saga";
import users from './reducers/users';
import rootSaga from './rootSaga';


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    users,
})

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, thunk),
);
sagaMiddleware.run(rootSaga);

export default store;