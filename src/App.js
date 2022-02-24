import React, {useState, useEffect} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import configureStore, {history} from './store';
import APPNavigation from './navigation/screens';

export const store = configureStore();

const APP = () => {  
  return(
    <Provider store={store}>
      <BrowserRouter history={history}>
        <APPNavigation />
      </BrowserRouter>
    </Provider>
  );
}

export default APP;