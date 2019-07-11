import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,  withRouter} from 'react-router-dom';
 //import {Provider} from 'react-redux';
// import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';


const AppWithRouter = withRouter(App);
ReactDOM.render(
  
    <Router>
    <AppWithRouter />
    </Router>,  document.getElementById('root'));

    
    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
