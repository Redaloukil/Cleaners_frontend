import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch , Route } from 'react-router-dom';

import store from './store';
import setAuthentificationHeader from './setAuthentificationHeader';
import { fetchCurrentUserRequest , fetchCurrentUserSuccess } from './actions/auth';
import createHistory from 'history/createBrowserHistory';


if(localStorage.trndy) {
    setAuthentificationHeader(localStorage.trndy);
    store.dispatch(fetchCurrentUserRequest());
} else {
    store.dispatch(fetchCurrentUserSuccess({}));
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
