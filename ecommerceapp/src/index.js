import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './app/store';
import { setCurrentUser } from './app/userSlice';
import jwtDecode from 'jwt-decode';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

if (localStorage.getItem('token')) {
  store.dispatch(setCurrentUser(jwtDecode(localStorage.getItem('token'))));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <ErrorBoundary>
      <App />
  </ErrorBoundary>
  </Provider>
  </React.StrictMode>

);

