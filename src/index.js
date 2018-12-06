import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch , Route } from 'react-router-dom';

import store from './store';
import setAuthentificationHeader from './setAuthentificationHeader';
import { fetchCurrentUserRequest , fetchCurrentUserSuccess } from './actions/users';
import createHistory from 'history/createBrowserHistory';
 
import rootSaga from './rootSaga';

import './index.css';

// SagaMiddleware.run(rootSaga);

if(localStorage.trndy) {
    setAuthentificationHeader(localStorage.trndy);
    store.dispatch(fetchCurrentUserRequest());
} else {
    store.dispatch(fetchCurrentUserSuccess({}));
}

if (localStorage.trndy) {
    
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
