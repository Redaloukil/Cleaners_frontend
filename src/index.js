import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import { createStore , applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {rootReducer} from './reducers';
import createSagaMiddleware , { SagaMiddleware} from "redux-saga";
import rootSaga from './rootSaga';
import setAuthentificationHeader from './setAuthentificationHeader';
import { fetchCurrentUserRequest , fetchCurrentUserSuccess } from './actions/users';
import createHistory from 'history/createBrowserHistory';
import './index.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, thunk)
);

sagaMiddleware.run(rootSaga);

if (localStorage.trndy) {
  setAuthentificationHeader(localStorage.trndy);
  store.dispatch(fetchCurrentUserRequest());
} else {
  store.dispatch(fetchCurrentUserSuccess({}));
}

if (localStorage.alhubLang) {
 
}

const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <Switch>
                <Route path="/" component={App}/>
            </Switch> 
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
);


serviceWorker.unregister();
