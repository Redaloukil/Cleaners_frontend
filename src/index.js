import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
// import {createBrowserHistory} from 'history';
import store from './store';

const store = {

}

ReactDOM.render(
    <Router store={}>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
    ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
