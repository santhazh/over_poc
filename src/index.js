import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
// import createLogger from 'redux-logger';
import allReducers from './reducers';

// const logger = createLogger();
const store = createStore(
    allReducers,
    // applyMiddleware(logger)
);

ReactDOM.render(
   <Provider store={store}>
       <App />
   </Provider>, document.getElementById('root'));
registerServiceWorker();
