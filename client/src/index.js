import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import mainReducer from './Reducers';
import watchFetchSearchData from './Sagas.js';

import Login from './components/Login';
import Signup from './components/Signup';
import HabitRegister from './components/HabitRegister';
import Upload from './components/Upload';
import Stat from './components/Stat';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

//saga middleware
const sagaMiddleware = createSagaMiddleware();

//redux store with saga middleware
const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));
// activate the saga(s)
sagaMiddleware.run(watchFetchSearchData);

//fetch initial data
store.dispatch({ type: 'FETCH_SEARCH_DATA', payload: { userId: '*', month: '*' } }); // 

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/habit_register" component={HabitRegister}></Route>
        <Route path="/upload" component={Upload}></Route>
        <Route path="/stat" component={Stat}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
