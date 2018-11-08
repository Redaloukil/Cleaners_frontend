import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import store from './store';
import setAuthentificationHeader from './setAuthentificationHeader';
import { fetchCurrentUserRequest , fetchCurrentUserSuccess } from './actions/auth';
import { users } from './api';


if(localStorage.trndy) {
    setAuthentificationHeader(localStorage.trndy);
    store.dispatch(fetchCurrentUserRequest());
} else {
    store.dispatch(fetchCurrentUserSuccess({}));
}
  


console.log(call)
console.log(localStorage.trndy)
ReactDOM.render(
    <BrowserRouter history={createBrowserHistory}>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
