import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App'; */
import reportWebVitals from './reportWebVitals';


// Redux Imports:
import { Provider } from 'react-redux';
//Import de la función para configurar nuestro appStore
import {  createAsyncAppStore } from './store/config/storeConfig';
import AppReduxSaga from './AppReduxSaga';
//Creamos el appStore
let appAsyncStore = createAsyncAppStore()



ReactDOM.render(
  <Provider store={appAsyncStore}>
    <React.StrictMode>
      <AppReduxSaga />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
