import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import './index.css';
import './reset.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import budgetReducer from './store/reducer/budget';
import transactionReducer from './store/reducer/transaction';
let middleWares = [thunk];
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middleWares.push(logger);
}
const rootReducer = combineReducers({budget: budgetReducer, transaction: transactionReducer});

const store = createStore(rootReducer,  applyMiddleware(...middleWares));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
