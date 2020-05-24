import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares)

const store = mockStore({
  budget:{
    error: null,
    loading: true
  },
  transactions: {
    error: null,
    loading: false,
    transactions: []
  },
})

const MockStoreProvider = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

export default MockStoreProvider;